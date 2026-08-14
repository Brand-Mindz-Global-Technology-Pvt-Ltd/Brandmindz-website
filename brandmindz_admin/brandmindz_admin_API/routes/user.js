const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/Database.js');
const userMiddleware = require('../middleware/UserModel.js');
var md5 = require('md5');
const fileUpload = require('express-fileupload');
const _ = require('lodash');
const mime = require('mime-types')
var bodyParser = require('body-parser');
var cors = require('cors');

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
  const { user_name, pass_word } = req.body;
  
  if (!user_name || !pass_word) {
    return res.status(400).send({
      msg: "Username and password are required"
    });
  }

  const sql = `
    SELECT * 
    FROM user
    WHERE user_name = ? AND pass_word = ?
  `;

  db.query(sql, [user_name, pass_word], (err, result) => {
    if (err) {
      return res.status(500).send({
        data: err,
        msg: "Server error during login"
      });
    }

    if (result.length > 0) {
      // Login successful
      const user = result[0];
      // Exclude password from the response
      delete user.pass_word;
      
      return res.status(200).send({
        data: user,
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
