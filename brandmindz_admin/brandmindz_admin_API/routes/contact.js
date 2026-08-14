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
router.post('/insertEnq', (req, res) => {
  const data = {
    company_name: req.body.company_name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    created_at: new Date(),
    location: req.body.location,
    name: req.body.name,
    message: req.body.message
  };

  const sql = "INSERT INTO enquiry SET ?";

  db.query(sql, data, (err, result) => {
    if (err) {
      return res.status(400).send({
        data: err,
        msg: "Enquiry insert failed"
      });
    }

    return res.status(200).send({
      data: result,
      msg: "Enquiry created successfully"
    });
  });
});

// GET ALL CONTACTS
router.get('/getEnq', (req, res) => {
  const sql = `
    SELECT * 
    FROM enquiry
    ORDER BY enq_id DESC
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

// GET CONTACT BY ID
router.post('/getEnqByID', (req, res) => {
  const sql = `
    SELECT * 
    FROM enquiry
    WHERE enq_id = ?
  `;

  db.query(sql, [req.body.enq_id], (err, result) => {
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

// UPDATE CONTACT
router.post('/updateEnq', (req, res) => {
  const data = {
    company_name: req.body.company_name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    name: req.body.name,
    message: req.body.message,
    location: req.body.location
  };

  const sql = `
    UPDATE enquiry 
    SET ?
    WHERE enq_id = ?
  `;

  db.query(sql, [data, req.body.enq_id], (err, result) => {
    if (err) {
      return res.status(400).send({
        data: err,
        msg: "Enquiry update failed"
      });
    }

    return res.status(200).send({
      data: result,
      msg: "Enquiry updated successfully"
    });
  });
});

router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = router;
