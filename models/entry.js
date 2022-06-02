const mongoose = require("mongoose");



const entrySchema = new mongoose.Schema ({
    title: {type:"string", require:true},
    content:{type: "string", require:true},
    date: {type: "date", require:true}
});

const Journal = mongoose.model("Journal", entrySchema);

module.exports = Journal;