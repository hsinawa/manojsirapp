const mongoose = require("mongoose");

const EnquireSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
        trim:true
  
      },
      comment: {
        type: String,
        require: [true, "Tell us what you want to know"],
        trim:true
      },
      contact: {
        type: String,
        require: [true, "Enter Your Contact Number"],
       
      }
},{timestamps:true})


const Enquire = mongoose.model("Enquire", EnquireSchema);

module.exports = Enquire;