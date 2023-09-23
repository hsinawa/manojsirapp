const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      require: true,
    },

    standard: {
      type: String,
      trim: true,
      require,
    },
    contactnumber: { type: String, trim: true, min: 10, max: 13, require },

    schoolName: {
      type: String,
      trim: true,
      require,
    },

    password: {
      type: String,

      require,
    },

    ipAddress: [
      {
        ip: { type: String, date: Date.now() },
      },
    ],

    isLoggedIn: {
      type: Boolean,
      require,
      default: false,
    },

    finalMarksScored: {
      type: Number,
      require,
    },

    isAccountValid: {
      type: Boolean,
      require,
      default: false,
    },

    testScores: [
      {
        NameOfTest: {
          type: String,
          require,
          trim:true,
        },

        MarksScored: {
          type: Number,
          require,
        },
        TotalMarks: {
          type: Number,
          require,
        }
       
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
