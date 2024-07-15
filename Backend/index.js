const express = require("express")
const bodyParser =require("body-parser")
const mysql = require("mysql")
const app = express()


app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'oliver'
    });

db.connect((err)=>{
    if(err) throw err;
    console.log('Database connected successfully');
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    });