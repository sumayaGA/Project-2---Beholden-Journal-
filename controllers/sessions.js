//Dependencies
const express = require("express");
const bcrypt = require("bcrypt");
const sessionsRouter = express.Router();
const User = require("../models/user");


//Export Sessions Router
module.exports = sessionsRouter;