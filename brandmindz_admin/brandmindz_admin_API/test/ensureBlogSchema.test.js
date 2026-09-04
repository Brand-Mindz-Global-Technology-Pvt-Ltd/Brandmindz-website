const test = require('node:test');
const assert = require('node:assert/strict');
const { ensureBlogSchema } = require('../services/ensureBlogSchema.js');

const currentColumns = [
  ['title', 'text'],
  ['short_description', 'text'],
  ['meta_title', 'text'],
  ['meta_description', 'text'],
  ['content', 'longtext'],
  ['tags', 'text']
].map(([COLUMN_NAME, DATA_TYPE]) => ({
  COLUMN_NAME,
  DATA_TYPE,
  CHARACTER_SET_NAME: 'utf8mb4'
}));

test('does not alter an up-to-date blogs table', async () => {
  let queries = 0;
  const db = {
    query: (_sql, _values, callback) => {
      queries += 1;
      callback(null, currentColumns);
    }
  };

  await ensureBlogSchema(db);
  assert.equal(queries, 1);
});

test('upgrades text columns when the blogs table schema is outdated', async () => {
  const sqlStatements = [];
  const db = {
    query: (sql, values, callback) => {
      sqlStatements.push(sql);
      if (typeof values === 'function') {
        values(null);
        return;
      }
      callback(null, []);
    }
  };

  await ensureBlogSchema(db);
  assert.equal(sqlStatements.length, 2);
  assert.match(sqlStatements[1], /content LONGTEXT/);
  assert.match(sqlStatements[1], /utf8mb4/);
});
