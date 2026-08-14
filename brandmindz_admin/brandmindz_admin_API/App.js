var express = require("express");
const sgMail = require("@sendgrid/mail");
const db = require("./config/Database.js");
var app = express();
var fs = require("fs");
var http = require("http");
var https = require("https");
const fileUpload = require("express-fileupload");

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
httpServer.listen(3007);
// httpsServer.listen(3008);

var bodyParser = require("body-parser");
var cors = require("cors");
const _ = require("lodash");
const mime = require("mime-types");

app.use(bodyParser.json({ limit: "50mb" }));
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON Payload:', err.message);
    return res.status(400).send({ msg: 'Invalid JSON payload. Please check your request body.' });
  }
  next();
});
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true, limit: "50mb", parameterLimit: 50000
  })
);

// IMPORTANT: fileUpload must be registered BEFORE routes so req.files is available
app.use(
  fileUpload({
    createParentPath: true,
  })
);

const path = require("path");
const blog = require("./routes/blog.js");
const contact = require("./routes/contact.js");
const user = require("./routes/user.js");

app.use("/blog", blog);
app.use("/contact", contact);
app.use("/user", user);

// Serve uploaded files as static assets
app.use("/storage", express.static(path.join(__dirname, "storage")));

module.exports = app;
