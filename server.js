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

//request a list of all potential candidates
//db.query(`SELECT * FROM candidates`, (err, rows) => {
   // console.log(rows);
//})

//GET a single candidate
//db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row)=> {
 //   if(err) {
   //     console.log(err);
  //  }
  //  console.log(row);
//});

//DELETE a candidate
//db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) =>{
  //  if(err){
    //    console.log(err);
    //}
    //console.log(result);
//});

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Default response for any other request (Not Found) place below an app.get also called a catchall
app.use((req, res) => {
    res.status(404).end();
});










app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});