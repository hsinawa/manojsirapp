const mongoose = require("mongoose");

const ResultSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
      trim: true,
    },
    standard: {
      type: String,
      require: [true, "Enter Class"],
      trim: true,
    },
    resultURL: {
      default: "",
      type: String,
      require: [true, "Enter Your Contact Number"],
    },
  },
  { timestamps: true }
);

const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;
