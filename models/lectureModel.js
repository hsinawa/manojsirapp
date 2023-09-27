const mongoose = require("mongoose");

const LectureSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
      trim: true,
    },
    link: {
      type: String,
      require: [true, "Enter Link"],
      trim: true,
      unique:true
    },

    notesURL:{
        type: String,
        require: [true, "Notes URL is required"],
        trim: true,
    },

    assignmentURL:{
        type: String,
        require: [true, "Assignment URL is required"],
        trim: true,
    },

    isValid: {
      default: true ,
      type: Boolean,
      require
     
    },
  },
  { timestamps: true }
);

const Lecture = mongoose.model("Lecture", LectureSchema);

module.exports = Lecture;
