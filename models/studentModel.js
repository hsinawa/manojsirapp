const mongoose = require("mongoose");

const ipAddressSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    }
},
  {
    timestamps: true,
  }
);

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
      
      require: true,
    },

    standard: {
      type: Number,
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

    ipAddress: [ipAddressSchema],

    totalLogins: {
      type: Number,
      require,
      default: false,
    },

    ActiveLogins: {
      type: Number,
      require,
      default: 0,
      min:0

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
        },
        PercentageObtained : {
          type:Number,
          require
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
