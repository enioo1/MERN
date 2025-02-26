const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    comment:{
        type: String,
        require: true  
    }
})

const Contact = mongoose.model("Contact", contactSchema)
module.exports = Contact