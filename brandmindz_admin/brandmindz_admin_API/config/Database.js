const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'brandmindz',
    waitForConnections: true,
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || 10),
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000
});

// Check configuration at startup without leaving the application tied to one
// connection. Pool queries can acquire a fresh connection after a DB restart.
db.getConnection((err, connection) => {
    if (err) {
        console.error(`[MySQL] Initial connection failed (${err.code || 'UNKNOWN'}): ${err.message}`);
        return;
    }

    console.log('Connected to MySQL database successfully.');
    connection.release();
});

module.exports = db;
