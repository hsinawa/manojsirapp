const mongoose = require("mongoose");

const TrailClassSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, "Name of Student"],
        trim:true
    } ,

    contact:{
        type:String,
        require: [true, "Name of Student"]
    },

    standard: {
        type: String,
        require: [true, "Name of Class"],
    } ,

    subject : {
        type: String,
        require: [true, "Name of Subject"],
    } ,

    date:{
        type: String,
        require: [true, "Name of Date"],
    }

} , {timestamps:true} )

const TrialClass = mongoose.model('TrialClass', TrailClassSchema )

module.exports = TrialClass
