const mysql = require('mysql2');
const { queryWithRetry } = require('../services/queryWithRetry.js');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'brandmindz',
    waitForConnections: true,
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || 10),
    maxIdle: Number(process.env.DB_MAX_IDLE || 5),
    idleTimeout: Number(process.env.DB_IDLE_TIMEOUT_MS || 60000),
    queueLimit: 0,
    connectTimeout: Number(process.env.DB_CONNECT_TIMEOUT_MS || 10000),
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000
});

// Check configuration at startup without leaving the application tied to one
// connection. Pool queries can acquire a fresh connection after a DB restart.
pool.getConnection((err, connection) => {
    if (err) {
        console.error(`[MySQL] Initial connection failed (${err.code || 'UNKNOWN'}): ${err.message}`);
        return;
    }

    console.log('Connected to MySQL database successfully.');
    connection.release();
});

function query(sql, values, callback) {
    let queryValues = values;
    let queryCallback = callback;

    if (typeof values === 'function') {
        queryCallback = values;
        queryValues = undefined;
    }

    if (typeof queryCallback !== 'function') {
        throw new TypeError('Database query callback is required');
    }

    const queryArgs = queryValues === undefined ? [sql] : [sql, queryValues];

    return queryWithRetry(
        pool.query.bind(pool),
        queryArgs,
        queryCallback,
        // A DB restart or a stale Docker-to-host connection can take more than
        // a few hundred milliseconds to recover. Each retry acquires a fresh
        // pooled connection.
        { maxRetries: 5, retryDelayMs: 300 }
    );
}

module.exports = {
    query,
    escape: mysql.escape,
    getConnection: pool.getConnection.bind(pool)
};
