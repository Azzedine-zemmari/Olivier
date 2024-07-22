const router = require("express").Router();
const db = require("../config/db")
const Event = require("../Controllers/EventsController")
const Agenda = require("../Controllers/AgendaController")

//upload the file
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post("/file-upload", upload.single('file'), Event.InsertStade);
//open page register
router.get("/SignUp",(req,res)=>{
    res.redirect("/public/register.html");
});
//open page login
router.get("/",(req,res)=>{
    res.redirect("/public/login.html");
});
router.get("/AddForm",(req,res)=>{
    res.redirect("/public/AddForm.html");
})
router.get("/Dashboard",Event.getAllEvents)

router.get("/Agenda",Agenda.getAllAgenda)
//do the login 
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM persons WHERE email = '${email}' AND password = '${password}';`;
    db.query(sql, (err, result) => {
        // if (err) {
        //     res.status(500).send('Database error');
        //     return;
        // }
        if (result.length === 0) {
            res.status(404).send('Invalid email or password');
            return;
        }
        if (result[0].admin == 1) {
            res.redirect("/Dashboard");
        } else {
            res.render("Fertilisation");
        }
    });
});
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