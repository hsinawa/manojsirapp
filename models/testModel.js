const mongoose = require("mongoose");

const TestSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require,
    },

    dateOfExam: {
      type: String,
      trim: true,
      require,
    },

    standard: {
      type: Number,
      trim: true,
      min: 9,
      max: 12,
      require,
    },

    MaxMarks: {
      type: Number,
      trim: true,
      require,
    },

    isValid: {
      type: Boolean,
      trim: true,
      require,
      default: true,
    },

    comment: {
      type: String,
      trim: true,
      require,
    },

    testPaperLink: {
      type: String,
      trim: true,
      require,
    },

    answerLink: {
      type: String,
      trim: true,
      require,
    },
    subject: {
      type: String,
      trim: true,
      require,
    },
    students: [
      {
        iDofStudent: {
          type: String,
          require,
        },
        NameOfStudent: {
          type: String,
          require,
          trim: true,
        },
        email: {
          type: String,
          require,
          trim: true,
        },
        contactnumber: {
          type: String,
          require,
          trim: true,
        },
        SchoolName: {
          type: String,
          require,
          trim: true,
        },

        MarksScored: {
          type: Number,
          default: 0,
          require,
        },
        TotalMarks: {
          type: Number,
          default: 0,
          require,
        },
        PercentageObtained: {
          type: Number,
          default: 0,
          require,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
