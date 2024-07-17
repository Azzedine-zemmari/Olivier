const express = require("express")
const bodyParser =require("body-parser")
const mydb = require("./config/db")
const rout = require("./routers/router")
const path = require("path")
const app = express()
app.use(express.static(path.join(__dirname, '')));
app.set('view engine', 'ejs');
// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//for router
app.use(rout)

app.listen(3000,()=>{
    console.log("serveur is running");
})

