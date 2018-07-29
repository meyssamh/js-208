var mongoose = require('mongoose');

var DeveloperSchema = new mongoose.Schema({
    name: {type: String, required:true},
    family: String
}, {
    collection: 'developers',
    timestamps: true,
});


module.exports = mongoose.model("Developer", DeveloperSchema);