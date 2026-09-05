const express = require('express');
const router = express.Router();
const db = require('../config/Database.js');
const userMiddleware = require('../middleware/UserModel.js');
const path = require('path');
const fs = require('fs');
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const BLOG_FIELD_LIMITS = {
  title: 200,
  slug: 200,
  short_description: 500,
  meta_title: 60,
  meta_description: 160,
  category: 100,
  tags: 500,
  image: 500,
  content: 100000
};

const validateBlog = (req, res, next) => {
  for (const [field, limit] of Object.entries(BLOG_FIELD_LIMITS)) {
    const value = req.body[field];
    if (value != null && typeof value !== 'string') {
      return res.status(400).send({
        msg: `${field.replaceAll('_', ' ')} must be text.`,
        code: 'INVALID_BLOG_FIELD',
        field
      });
    }

    if (value && value.length > limit) {
      return res.status(400).send({
        msg: `${field.replaceAll('_', ' ')} must not exceed ${limit} characters.`,
        code: 'BLOG_FIELD_TOO_LONG',
        field,
        limit,
        length: value.length
      });
    }
  }

  next();
};

const databaseError = (res, err, action) => {
  console.error(`[Blog] ${action} failed (${err.code || 'UNKNOWN'}): ${err.message}`);
  const unavailable = err.fatal || [
    'PROTOCOL_CONNECTION_LOST',
    'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR',
    'ECONNREFUSED',
    'ECONNRESET',
    'ETIMEDOUT'
  ].includes(err.code);

  const clientErrors = {
    ER_DATA_TOO_LONG: 'One of the blog fields is too long. Redeploy the API so the blog schema migration can run.',
    ER_DUP_ENTRY: 'This blog slug already exists. Please use a different slug.',
    ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 'The blog contains a value or character that the database cannot store.'
  };

  return res.status(unavailable ? 503 : err.code === 'ER_DUP_ENTRY' ? 409 : 400).send({
    msg: unavailable
      ? 'Database is temporarily unavailable. Please try again.'
      : clientErrors[err.code] || `Unable to ${action}.`,
    code: err.code || 'DATABASE_ERROR'
  });
};

router.get('/getBlog', (req, res, next) => {
  db.query(`SELECT * FROM blogs ORDER BY blog_id DESC`,
    (err, result) => {
      if (err) {
        return databaseError(res, err, 'load blogs');
      } else {
        return res.status(200).send({ data: result, msg: 'Success' });
      }
    }
  );
});

router.post('/getBlogById', (req, res, next) => {
  db.query(`SELECT * FROM blogs WHERE blog_id=${db.escape(req.body.blog_id)}`,
    (err, result) => {
      if (err) {
        return databaseError(res, err, 'load the blog');
      } else {
        return res.status(200).send({ data: result, msg: 'Success' });
      }
    }
  );
});

router.post('/editBlogs', validateBlog, (req, res, next) => {
  db.query(`UPDATE blogs
            SET title=${db.escape(req.body.title)}
            ,short_description=${db.escape(req.body.short_description)}
            ,slug=${db.escape(req.body.slug)}
            ,meta_title=${db.escape(req.body.meta_title)}
            ,meta_description=${db.escape(req.body.meta_description)}
            ,content=${db.escape(req.body.content)}
            ,category=${db.escape(req.body.category)}
            ,tags=${db.escape(req.body.tags)}
            ,image=${db.escape(req.body.image)}
            ,views=${db.escape(req.body.views)}
            ,author_id=${db.escape(req.body.author_id)}
            WHERE blog_id=${db.escape(req.body.blog_id)}`,
    (err, result) => {
      if (err) {
        return databaseError(res, err, 'update the blog');
      } else {
        return res.status(200).send({ data: result, msg: 'Success' });
      }
    }
  );
});

router.post('/insertBlog', validateBlog, (req, res, next) => {
  let data = {
    title: req.body.title,
    short_description: req.body.short_description,
    slug: req.body.slug,
    meta_title: req.body.meta_title,
    meta_description: req.body.meta_description,
    content: req.body.content,
    category: req.body.category,
    tags: req.body.tags,
    image: req.body.image,
    views: req.body.views,
    author_id: req.body.author_id
  };
  let sql = "INSERT INTO blogs SET ?";
  db.query(sql, data, (err, result) => {
    if (err) {
      return databaseError(res, err, 'save the blog');
    } else {
      return res.status(200).send({ data: result, msg: 'Success' });
    }
  });
});

router.post('/uploadBlogImage', (req, res, next) => {
  if (!req.files || !req.files.image) {
    return res.status(400).send({ msg: 'failed', error: 'No image file provided' });
  }

  const imageFile = req.files.image;
  if (imageFile.size > MAX_IMAGE_SIZE) {
    return res.status(400).send({
      msg: 'Featured image must be 5 MB or smaller.',
      code: 'BLOG_IMAGE_TOO_LARGE',
      limit: MAX_IMAGE_SIZE
    });
  }

  const fileExt = path.extname(imageFile.name);
  const fileName = `blog_${Date.now()}${fileExt}`;
  const uploadDir = path.join(__dirname, '../storage/uploads/blog');
  const uploadPath = path.join(uploadDir, fileName);

  // Ensure the directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  imageFile.mv(uploadPath, (err) => {
    if (err) {
      console.log('Upload error:', err);
      return res.status(500).send({ msg: 'failed', error: err.message });
    }
    return res.status(200).send({
      msg: 'Success',
      fileName: fileName,
      filePath: `storage/uploads/blog/${fileName}`,
    });
  });
});

router.post('/deleteBlog', (req, res, next) => {
  let sql = `DELETE FROM blogs WHERE blog_id=${db.escape(req.body.blog_id)}`;
  db.query(sql, (err, result) => {
    if (err) {
      return databaseError(res, err, 'delete the blog');
    } else {
      return res.status(200).send({ data: result, msg: 'Success' });
    }
  });
});

router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = router;
