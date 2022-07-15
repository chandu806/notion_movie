const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://chandu:chandu806@cluster0.gdsujf1.mongodb.net/movies")
}

module.exports = connect;