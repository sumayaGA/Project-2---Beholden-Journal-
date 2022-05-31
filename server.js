//Dependencies
require("dotenv").config();
const express = require ("express");
const mongoose = require("mongoose");
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


//Listener
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log("Listening on port", PORT);
});

