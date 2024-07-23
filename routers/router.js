const router = require("express").Router();
const db = require("../config/db")
const Event = require("../Controllers/EventsController")
const Agenda = require("../Controllers/AgendaController")
const isAdmin = require("../middlewares/isAdmin")
const isAuthenticated = require("../middlewares/isAuthenticated")

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
    res.render("Authentification");
});
router.get("/AddForm",(req,res)=>{
    res.redirect("/public/AddForm.html");
})
router.get("/Dashboard", isAuthenticated ,isAdmin,Event.getAllEvents)

router.get("/Agenda",isAuthenticated ,Agenda.getAllAgenda)

router.get("/Home",isAuthenticated,(req,res)=>{
    res.render("zitoon");
})
router.get("/Culture",isAuthenticated,(req,res)=>{
    res.render("Culture");
})
router.get("/Rekolte",isAuthenticated,(req,res)=>{
    res.render("Recolte");
})
router.get("/Plantation",isAuthenticated,(req,res)=>{
    res.render("Plantation");
})
router.get("/Fertilisation",isAuthenticated,(req,res)=>{
    res.render("Fertilisation");
})
//do the login 
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM persons WHERE email = '${email}' AND password = '${password}';`;
    db.query(sql, (err, result) => {
        if (result.length === 0) {
            req.flash('message', 'Invalid email or password');
            res.redirect('/');
            return;
        }
        // req.session.user = result[0];
        req.session.user = {
            id: result[0].id,
            email: result[0].email,
            admin: result[0].admin 
        };
        if (result[0].admin == 1) {
            res.redirect("/Dashboard");
        } else {
            res.render("Fertilisation");//change to acceuill
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
        res.render("zitoon");
    })
})


// Logout route
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error :(');
        }
        res.redirect('/'); // Redirect to the login page or home page after logout
    });
});






module.exports = router;