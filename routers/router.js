const router = require("express").Router();
const db = require("../config/db")
const Event = require("../Controllers/EventsController")
//open page register
router.get("/SignUp",(req,res)=>{
    res.redirect("/public/register.html");
});
//open page login
router.get("/",(req,res)=>{
    res.redirect("/public/login.html");
});
// router.get("/Dashboard",(req,res)=>{
//     // const sql = "SELECT * FROM phenological_stages"
//     // db.query(sql,(err,result)=>{
//     //     res.render("Dashboard",{data:result});
//         // res.redirect("/public/Dashboard.ejs");
//     // })
// });
// 
router.get("/Dashboard",Event.getAllEvents)
//do the login 
router.post("/login",(req,res)=>{
    const {email,password} = req.body
    const sql = `SELECT * FROM persons WHERE email ='${email}' and password ='${password}';`
    db.query(sql,(err,result)=>{
        console.log(result)
        if(err){
            throw err;
        }
        if(result[0].admin == 1){
            res.redirect("/public/Dashboard.html");
        }
        res.send(`Welcome ${result[0].nom}`)
    })
})
//do the register
router.post("/register",(req,res)=>{
    const {nom,prenom,email,tel,password} = req.body;
    const sql = `INSERT INTO persons (email, password, nom, prenom, number) VALUES (?,?,?,?,?)`;
    db.query(sql,[email,password,nom,prenom,tel],(err,result)=>{
        if(err){
            res.status(500).send('Cet email est lie a un compte existant ! Veuillez saisir autre . <a href="/SignUp">go back</a>')
        }
        res.send('User register');
    })
})





module.exports = router;