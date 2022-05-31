//Dependencies
const mongoose = require("mongoos");

//Declare User Schema
const userSchema = new mongoose.Schema ({
    first: {type:String, required:true},
    last: {type:String, required:true},
    email: {type:String, unique: true, required:true},
    password: {type:String, required:true},
});

//Declare User Model
const User = mongoose.model("User", userSchema);

//Export User Model
module.exports = User;