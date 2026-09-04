const BLOG_SCHEMA_MIGRATION = `
  ALTER TABLE blogs
    MODIFY COLUMN title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN short_description TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN meta_title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN meta_description TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN content LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN tags TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
`;

const REQUIRED_COLUMNS = {
  title: 'text',
  short_description: 'text',
  meta_title: 'text',
  meta_description: 'text',
  content: 'longtext',
  tags: 'text'
};

const BLOG_SCHEMA_CHECK = `
  SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_SET_NAME
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'blogs'
    AND COLUMN_NAME IN (${Object.keys(REQUIRED_COLUMNS).map(() => '?').join(', ')})
`;

function ensureBlogSchema(db) {
  return new Promise((resolve, reject) => {
    const columnNames = Object.keys(REQUIRED_COLUMNS);

    db.query(BLOG_SCHEMA_CHECK, columnNames, (checkError, columns) => {
      if (checkError) {
        reject(checkError);
        return;
      }

      const schemaIsCurrent = columns.length === columnNames.length && columns.every((column) => (
        REQUIRED_COLUMNS[column.COLUMN_NAME] === column.DATA_TYPE
        && column.CHARACTER_SET_NAME === 'utf8mb4'
      ));

      if (schemaIsCurrent) {
        resolve();
        return;
      }

      db.query(BLOG_SCHEMA_MIGRATION, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  });
}

module.exports = { ensureBlogSchema, BLOG_SCHEMA_CHECK, BLOG_SCHEMA_MIGRATION };
