var mysql = require('mysql2');
var db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'brandmindz'
});

db.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL database:', err.message);
        if (err.code === 'ER_BAD_DB_ERROR') {
            console.error(`[MySQL] Unknown database: '${process.env.DB_NAME || 'pmsbm'}'. Please make sure the database is created, or check your DB_NAME in the .env file.`);
        }
        return;
    }
    console.log('Connected to MySQL database successfully.');
});

db.on('error', function (err) {
    console.error('MySQL connection error:', err.message);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('MySQL database connection was closed.');
    } else if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('MySQL database has too many connections.');
    } else if (err.code === 'ECONNREFUSED') {
        console.error('MySQL database connection was refused.');
    }
});

module.exports = db;