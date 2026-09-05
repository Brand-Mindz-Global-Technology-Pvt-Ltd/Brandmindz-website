const BLOG_SCHEMA_MIGRATION = `
  ALTER TABLE blogs
    MODIFY COLUMN title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN short_description TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN meta_title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN meta_description TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN content LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN category VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN tags TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MODIFY COLUMN slug VARCHAR(255) CHARACTER SET ascii COLLATE ascii_general_ci,
    MODIFY COLUMN image VARCHAR(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
`;

const REQUIRED_COLUMNS = {
  title: { type: 'text', charset: 'utf8mb4' },
  short_description: { type: 'text', charset: 'utf8mb4' },
  meta_title: { type: 'text', charset: 'utf8mb4' },
  meta_description: { type: 'text', charset: 'utf8mb4' },
  content: { type: 'longtext', charset: 'utf8mb4' },
  category: { type: 'varchar', charset: 'utf8mb4', length: 100 },
  tags: { type: 'text', charset: 'utf8mb4' },
  slug: { type: 'varchar', charset: 'ascii', length: 255 },
  image: { type: 'varchar', charset: 'utf8mb4', length: 500 }
};

const BLOG_SCHEMA_CHECK = `
  SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_SET_NAME, CHARACTER_MAXIMUM_LENGTH
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

      const schemaIsCurrent = columns.length === columnNames.length && columns.every((column) => {
        const required = REQUIRED_COLUMNS[column.COLUMN_NAME];
        return required.type === column.DATA_TYPE
          && required.charset === column.CHARACTER_SET_NAME
          && (!required.length || column.CHARACTER_MAXIMUM_LENGTH >= required.length);
      });

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
