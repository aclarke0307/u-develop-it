const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

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


db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// Default response for any other request (Not Found) place below an app.get also called a catchall
app.use((req, res) => {
    res.status(404).end();
});










app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});