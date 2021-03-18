const mongoose = require('mongoose');

const opinionSchema =  mongoose.Schema({
    name: String,
    opinion: String,
    email: String,
    registerDate: Date,
    text: String
});

const Opinion = mongoose.model('Opinion', opinionSchema);

module.exports = { Opinion }
