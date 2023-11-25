const mongoose = require("mongoose");

const LectureSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
      trim: true,
    },
    standard:{
      type: String,
      require: [true, "Class is required"],
      trim: true,
    },

    chapterName:{
      type: String,
      require: [true, "Chapter is required"],
      trim: true,
    },

    subject:{
      type: String,
      require: [true, "Subject is required"],
      trim: true,
    },

    comment:{
      type: String,
      require: [true, "Class is required"],
      trim: true,
    },

    link: {
      type: String,
      require: [true, "Enter Link"],
      trim: true,
     unique:false
    },

    notesURL:{
        type: String,
        default:'',
        require: [true, "Notes URL is required"],
        trim: true,
    },

    assignmentURL:{
        type: String,
        default:'',
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
