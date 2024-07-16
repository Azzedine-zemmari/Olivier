const router = require("express").Router();
const db = require("../config/db")

//open page register
router.get("/SignUp",(req,res)=>{
    res.sendFile(__dirname + "/register.html");
});
//open page login
router.get("/",(req,res)=>{
    res.sendFile(__dirname + "/login.html");
});
router.get("/Dashboard",(req,res)=>{
    res.sendFile(__dirname + "/Dashborad.html")
})
//do the login 
router.post("/login",(req,res)=>{
    const {email,password} = req.body
    const sql = `SELECT * FROM persons WHERE email ='${email}' and password ='${password}'`;
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        const user = result[0];
        if(user.admin === 1){
            res.redirect("./Dashboard.html");
        }
        res.send(`Welcome ${user.nom}`)
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