const express = require('express');
const router = express.Router();
const db = require('../config/Database.js');
const userMiddleware = require('../middleware/UserModel.js');

// CONTACT CRUD APIs

// INSERT CONTACT
router.post('/insertUser', (req, res) => {
  const data = {
    name: req.body.name,
    user_name: req.body.user_name,
    pass_word: req.body.pass_word
  };

  const sql = "INSERT INTO user SET ?";

  db.query(sql, data, (err, result) => {
    if (err) {
      return res.status(400).send({
        data: err,
        msg: "User insert failed"
      });
    }

    return res.status(200).send({
      data: result,
      msg: "User created successfully"
    });
  });
});

// GET ALL CONTACTS
router.get('/getUser', (req, res) => {
  const sql = `
    SELECT * 
    FROM user
    ORDER BY user_id DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(400).send({
        data: err,
        msg: "Failed"
      });
    }

    return res.status(200).send({
      data: result,
      msg: "Success"
    });
  });
});


// LOGIN API
router.post('/login', (req, res) => {
  const user_name = typeof req.body.user_name === 'string' ? req.body.user_name.trim() : '';
  const pass_word = typeof req.body.pass_word === 'string' ? req.body.pass_word : '';
  
  if (!user_name || !pass_word) {
    return res.status(400).send({
      msg: "Username and password are required"
    });
  }

  const sql = `
    SELECT user_id, name, user_name
    FROM \`user\`
    WHERE user_name = ? AND pass_word = ?
    LIMIT 1
  `;

  db.query(sql, [user_name, pass_word], (err, result) => {
    if (err) {
      console.error(`[Login] Database query failed (${err.code || 'UNKNOWN'}): ${err.message}`);
      return res.status(500).send({
        msg: "Server error during login"
      });
    }

    if (result.length > 0) {
      return res.status(200).send({
        data: result[0],
        msg: "Success"
      });
    } else {
      // Login failed
      return res.status(401).send({
        msg: "Invalid username or password"
      });
    }
  });
});

router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = router;
