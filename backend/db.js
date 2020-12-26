const mysql = require("mysql");

const pool = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'myapp'
});

exports.pool = pool;