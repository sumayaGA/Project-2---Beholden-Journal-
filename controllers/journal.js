//Dependencies
const express = require("express");
const bcrypt = require("bcrypt");
const journalRouter = express.Router();
const User = require("../models/user");
const Journal = require("../models/entry");


//New
journalRouter.get("/new", (req,res)=>{
    res.render("new.ejs", {
        currentUser:req.session.currentUser
    });
});


//Create
journalRouter.post("/", (req,res)=>{
    Journal.create(req.body, (error, createdJournal)=>{
        res.redirect("/");
    });
});

//Export Journal Router
module.exports = journalRouter; 