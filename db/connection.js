const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MYSQL username
        user: 'root',
        // Your Mysql password
        password: 'Thinkpadchester1!',
        database: 'election'
    },
    console.log('Connect to the election database')
);

module.exports = db;
