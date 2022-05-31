//Dependencies
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const userController = require("./controllers/users");
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

//Middleware + Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    }));

//Controllers
app.use("/users", userController);


//Listener
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Listening on port", PORT);
});

