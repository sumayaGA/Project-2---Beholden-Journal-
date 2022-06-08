//Dependencies
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const userController = require("./controllers/users");
const sessionsController = require("./controllers/sessions");
const journalController = require("./controllers/journal");
const methodOverride = require("method-override");
const app = express();


//Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Database Connection Error/Success
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

//Middleware + Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    }));
app.use(methodOverride("_method"));

//Controllers
app.use("/users", userController);
app.use("/sessions", sessionsController);
app.use("/journal", journalController);

//Index 
app.get('/', (req, res) => {
    if(req.session.currentUser) {
    
	    res.render('dashboard.ejs', {
            currentUser: req.session.currentUser
    });
    } else {
        res.render("index.ejs", {
            currentUser: req.session.currentUser
        });
    };
});




//Listener
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Listening on port", PORT);
});

