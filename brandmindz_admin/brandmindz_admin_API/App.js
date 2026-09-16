require("dotenv").config();
var express = require("express");
const db = require("./config/Database.js");
var app = express();
var http = require("http");
const fileUpload = require("express-fileupload");
const { ensureBlogSchema } = require("./services/ensureBlogSchema.js");

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
const port = Number(process.env.PORT || 3007);
// httpsServer.listen(3008);

var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.json({ limit: "50mb" }));
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON Payload:', err.message);
    return res.status(400).send({ msg: 'Invalid JSON payload. Please check your request body.' });
  }
  next();
});
const allowedOrigins = new Set([
  "https://brandmindz.com",
  "https://www.brandmindz.com",
  "https://admin.brandmindz.com",
]);
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) return callback(null, true);
    return callback(new Error("CORS origin not allowed"));
  },
  credentials: true,
}));
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

app.get("/", (req, res) => {
  res.status(200).json({ service: "brandmindz-admin-api", status: "running" });
});

// Serve uploaded files as static assets
app.use("/storage", express.static(path.join(__dirname, "storage")));

// Keep unknown API requests explicit and easy to diagnose in production.
app.use((req, res) => {
  res.status(404).json({ msg: "API route not found", path: req.originalUrl });
});

async function startServer() {
  httpServer.listen(port, "0.0.0.0", async () => {
    console.log(`BrandMindz admin API listening on port ${port}.`);

    try {
      await ensureBlogSchema(db);
      console.log("Blog database schema is ready.");
    } catch (err) {
      console.error(
        `[MySQL] Blog schema migration failed (${err.code || "UNKNOWN"}): ${err.message}`
      );
    }
  });
}

if (require.main === module) {
  startServer();
}

module.exports = app;
module.exports.startServer = startServer;

