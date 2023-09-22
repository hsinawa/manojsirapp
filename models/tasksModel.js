const mongoose = require("mongoose");

const taskModel = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name of Task"],
      trim: true,
    },

    id: {
      type: String,
      require: [true, "Id of User"],
      trim: true,
    },

    status: {
      type: Boolean,
      require: [true, "Status of Task"],
      default: false,
    },

    datetest: {
      type: String,
      require: [true, "Value of Date"],
    },

    comment:{
      type: String,
      require: [true, "Value of Date"],
      trim:true
    }
   
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Tasks", taskModel);

module.exports = Tasks;
