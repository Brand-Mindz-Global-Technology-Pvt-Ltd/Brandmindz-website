const express = require('express');
const router = express.Router();
const db = require('../config/Database.js');
const userMiddleware = require('../middleware/UserModel.js');
const path = require('path');
const fs = require('fs');

const databaseError = (res, err, action) => {
  console.error(`[Blog] ${action} failed (${err.code || 'UNKNOWN'}): ${err.message}`);
  const unavailable = err.fatal || [
    'PROTOCOL_CONNECTION_LOST',
    'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR',
    'ECONNREFUSED',
    'ECONNRESET',
    'ETIMEDOUT'
  ].includes(err.code);

  return res.status(unavailable ? 503 : 400).send({
    msg: unavailable
      ? 'Database is temporarily unavailable. Please try again.'
      : `Unable to ${action}.`,
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

router.post('/editBlogs', (req, res, next) => {
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

router.post('/insertBlog', (req, res, next) => {
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
