require("dotenv").config();
var express = require("express");
const sgMail = require("@sendgrid/mail");
const db = require("./config/Database.js");
var app = express();
var fs = require("fs");
var http = require("http");
var https = require("https");
const fileUpload = require("express-fileupload");
const { ensureBlogSchema } = require("./services/ensureBlogSchema.js");

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
const port = Number(process.env.PORT || 3007);
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

app.get("/health", (req, res) => {
  db.query("SELECT 1 AS ok", (err) => {
    if (err) {
      console.error(`[Health] Database unavailable (${err.code || "UNKNOWN"}): ${err.message}`);
      return res.status(503).send({ status: "unhealthy", database: "unavailable", code: err.code || "DATABASE_ERROR" });
    }
    return res.status(200).send({ status: "healthy", database: "connected" });
  });
});

// Serve uploaded files as static assets
app.use("/storage", express.static(path.join(__dirname, "storage")));

async function startServer() {
  try {
    await ensureBlogSchema(db);
    console.log("Blog database schema is ready.");
  } catch (err) {
    console.error(
      `[MySQL] Blog schema migration failed (${err.code || "UNKNOWN"}): ${err.message}`
    );
    process.exitCode = 1;
    return;
  }

  httpServer.listen(port, "0.0.0.0", () => {
    console.log(`BrandMindz admin API listening on port ${port}.`);
  });
}

if (require.main === module) {
  startServer();
}

module.exports = app;
module.exports.startServer = startServer;
