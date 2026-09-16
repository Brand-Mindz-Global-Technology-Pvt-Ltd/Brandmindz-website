const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/Database.js');
const userMiddleware = require('../middleware/UserModel.js');
var md5 = require('md5');
const { sendEnquiryMail } = require('../services/enquiryMailer.js');

const allowedStages = new Set([1, 2, 3]);
const clean = (value) => typeof value === 'string' ? value.trim() : '';

const buildMessage = (body, stage) => [
  `[Form progress: Step ${stage} of 3]`,
  `Service required: ${clean(body.serviceRequired) || '-'}`,
  `Industry: ${clean(body.industry) || '-'}`,
  `Detailed requirement: ${clean(body.detailedRequirement) || '-'}`,
  `Project start: ${clean(body.projectStart) || '-'}`,
  `Preferred connection: ${clean(body.preferredConnection) || '-'}`,
  `Contact mode: ${clean(body.contactMode) || '-'}`
].join('\n');

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

// Create an enquiry after step 1, then keep the same record updated as the
// visitor completes steps 2 and 3. Email is sent after every completed step.
router.post('/save-progress', (req, res) => {
  const stage = Number(req.body.stage);
  const enquiryId = Number(req.body.enquiryId);

  if (!allowedStages.has(stage)) {
    return res.status(400).send({ msg: 'Invalid form stage' });
  }
  if (!clean(req.body.name) || !clean(req.body.email) || !clean(req.body.phone)) {
    return res.status(400).send({ msg: 'Name, email and phone are required' });
  }

  const data = {
    company_name: clean(req.body.companyName),
    designation: clean(req.body.designation),
    email: clean(req.body.email),
    phone: clean(req.body.phone),
    location: clean(req.body.location),
    name: clean(req.body.name),
    message: buildMessage(req.body, stage)
  };

  const finish = (id) => {
    sendEnquiryMail({ enquiryId: id, stage, data: req.body })
      .then(() => res.status(200).send({ data: { enq_id: id, stage }, msg: 'Enquiry saved and email sent' }))
      .catch((mailError) => {
        console.error('Enquiry email failed:', mailError.message);
        // The lead is safely retained even when the mail provider is temporarily unavailable.
        res.status(200).send({ data: { enq_id: id, stage }, msg: 'Enquiry saved', mailWarning: true });
      });
  };

  if (enquiryId > 0) {
    db.query('UPDATE enquiry SET ? WHERE enq_id = ?', [data, enquiryId], (err, result) => {
      if (err) return res.status(500).send({ data: err, msg: 'Enquiry update failed' });
      if (!result.affectedRows) return res.status(404).send({ msg: 'Enquiry not found' });
      finish(enquiryId);
    });
    return;
  }

  db.query('INSERT INTO enquiry SET ?', { ...data, created_at: new Date() }, (err, result) => {
    if (err) return res.status(500).send({ data: err, msg: 'Enquiry insert failed' });
    finish(result.insertId);
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
