require('dotenv').config();
const express = require("express")
const bodyParser =require("body-parser")
const session = require('express-session');
const flash = require('connect-flash');
const mydb = require("./config/db")
const rout = require("./routers/router")
const path = require("path")

const app = express()
app.use(express.static(path.join(__dirname, '')));

// Set up session middleware
app.use(session({
    secret: process.env.SESSION_SECRET, // Use the secret key from the environment variable
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure to true if using HTTPS
}));

// Set up flash messages
app.use(flash());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//for router
app.use(rout)

app.listen(3000,()=>{
    console.log("serveur is running");
})

