import './App.js'
var express = require('express')
var mysql = require('mysql2')
const bodyParser = require('body-parser');
var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'capstone'
});

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log("MySQL Database is connected Succesfully!");
});
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/people',(req,res) => {
let sqlString = "Select * FROM people;"
db.query(sqlString, (err, result) => {
if (err){
    throw err;
}
console.log(result);
res.send(result)
});
});
app.post('/addInstructor/:name',(req,res) => {
    let sqlString = `INSERT INTO people (instructors) VALUES ('${req.params.name}')`;
    db.query(sqlString, (err, result) => {
    if (err){
        throw err;
    }
    console.log(result);
    res.send(result)
    });
    });
app.put('/people',(req,res) => {
        let sqlString = "UPDATE"
        db.query(sqlString, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send(result)
        });
        });
app.delete('/people',(req,res) => {
            let sqlString = "DELETE"
            db.query(sqlString, (err, result) => {
            if (err){
                throw err;
            }
            console.log(result);
            res.send(result)
            });
            });           
app.listen(4000, () => {
    console.log("The server is running on Port 4000")
})
