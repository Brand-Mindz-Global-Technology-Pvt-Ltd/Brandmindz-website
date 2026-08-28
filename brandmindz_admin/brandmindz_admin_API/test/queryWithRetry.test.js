const test = require('node:test');
const assert = require('node:assert/strict');
const { queryWithRetry } = require('../services/queryWithRetry.js');

test('retries a lost connection and returns the successful result', async () => {
  let attempts = 0;

  const result = await new Promise((resolve, reject) => {
    const execute = (_sql, callback) => {
      attempts += 1;
      if (attempts === 1) {
        callback(Object.assign(new Error('connection lost'), { code: 'PROTOCOL_CONNECTION_LOST' }));
        return;
      }
      callback(null, [{ user_id: 1 }]);
    };

    queryWithRetry(execute, ['SELECT 1'], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    }, { maxRetries: 2, retryDelayMs: 0 });
  });

  assert.equal(attempts, 2);
  assert.deepEqual(result, [{ user_id: 1 }]);
});

test('does not retry SQL or schema errors', async () => {
  let attempts = 0;
  const schemaError = Object.assign(new Error('unknown column'), { code: 'ER_BAD_FIELD_ERROR' });

  const receivedError = await new Promise((resolve) => {
    const execute = (_sql, callback) => {
      attempts += 1;
      callback(schemaError);
    };

    queryWithRetry(execute, ['SELECT broken'], (err) => resolve(err), {
      maxRetries: 2,
      retryDelayMs: 0
    });
  });

  assert.equal(attempts, 1);
  assert.equal(receivedError, schemaError);
});

test('stops after the configured retry limit', async () => {
  let attempts = 0;

  const receivedError = await new Promise((resolve) => {
    const execute = (_sql, callback) => {
      attempts += 1;
      callback(Object.assign(new Error('connection lost'), { code: 'PROTOCOL_CONNECTION_LOST' }));
    };

    queryWithRetry(execute, ['SELECT 1'], (err) => resolve(err), {
      maxRetries: 2,
      retryDelayMs: 0
    });
  });

  assert.equal(attempts, 3);
  assert.equal(receivedError.code, 'PROTOCOL_CONNECTION_LOST');
});
