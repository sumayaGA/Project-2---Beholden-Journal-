//Dependencies
const express = require("express");
const bcrypt = require("bcrypt");
const journalRouter = express.Router();
const User = require("../models/user");
const Journal = require("../models/entry");


//Index
journalRouter.get("/", (req, res) => {
    Journal.find ({}, (error, allJournal)=> {
        res.render("all-entries/index.ejs", { 
            journals: allJournal
        });
    });
});

//New
journalRouter.get("/new", (req,res)=>{
    res.render("new.ejs", {
        currentUser:req.session.currentUser
    });
});

//DELETE
journalRouter.delete("/:id", (req,res)=>{
    Journal.findByIdAndRemove(req.params.id, (err,data)=> {
        res.redirect("/journal");
    });
});

//Create
journalRouter.post("/", (req,res)=>{
    Journal.create(req.body, (error, createdJournal)=>{
        res.redirect("/");
    });
});

//EDIT
journalRouter.get("/:id/edit", (req,res)=>{
    Journal.findById(req.params.id, (err, foundJournal)=> {
        res.render("edit.ejs", {
            journal:foundJournal
        });
    });
});

//SHOW
journalRouter.get("/:id", (req,res)=>{
    Journal.findById(req.params.id, (err, foundJournal) => {
        res.render("all-entries/show.ejs", {
            journal:foundJournal
        });
    });
});

//Export Journal Router
module.exports = journalRouter; 