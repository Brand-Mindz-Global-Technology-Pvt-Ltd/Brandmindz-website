const test = require('node:test');
const assert = require('node:assert/strict');
const express = require('express');

test('login route handles success, invalid credentials, and DB errors safely', async (t) => {
  let queryImplementation;
  const databasePath = require.resolve('../config/Database.js');

  require.cache[databasePath] = {
    id: databasePath,
    filename: databasePath,
    loaded: true,
    exports: {
      query: (...args) => queryImplementation(...args),
      escape: (value) => value
    }
  };

  const middlewarePath = require.resolve('../middleware/UserModel.js');
  require.cache[middlewarePath] = {
    id: middlewarePath,
    filename: middlewarePath,
    loaded: true,
    exports: {
      isLoggedIn: (_req, _res, next) => next()
    }
  };

  const userRouter = require('../routes/user.js');
  const app = express();
  app.use(express.json());
  app.use('/user', userRouter);

  const server = await new Promise((resolve) => {
    const instance = app.listen(0, '127.0.0.1', () => resolve(instance));
  });
  t.after(() => server.close());

  const address = server.address();
  const endpoint = `http://127.0.0.1:${address.port}/user/login`;

  await t.test('returns a safe user payload on success', async () => {
    queryImplementation = (sql, values, callback) => {
      assert.match(sql, /FROM `user`/);
      assert.match(sql, /LIMIT 1/);
      assert.deepEqual(values, ['admin', 'secret']);
      callback(null, [{ user_id: 1, name: 'Admin', user_name: 'admin' }]);
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_name: '  admin  ', pass_word: 'secret' })
    });
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.msg, 'Success');
    assert.deepEqual(body.data, { user_id: 1, name: 'Admin', user_name: 'admin' });
    assert.equal('pass_word' in body.data, false);
  });

  await t.test('returns 401 when credentials do not match', async () => {
    queryImplementation = (_sql, _values, callback) => callback(null, []);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_name: 'admin', pass_word: 'wrong' })
    });

    assert.equal(response.status, 401);
    assert.deepEqual(await response.json(), { msg: 'Invalid username or password' });
  });

  await t.test('returns a safe 500 response when the DB query fails', async () => {
    queryImplementation = (_sql, _values, callback) => callback(
      Object.assign(new Error('connection lost'), { code: 'PROTOCOL_CONNECTION_LOST' })
    );

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_name: 'admin', pass_word: 'secret' })
    });

    assert.equal(response.status, 500);
    assert.deepEqual(await response.json(), { msg: 'Server error during login' });
  });
});
