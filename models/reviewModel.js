const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      require: [true, "Enter Email"],
      trim: true,
      unique:true
    },

    comment:{
        type: String,
        require: [true, "Feedback is required"],
        trim: true,
    },

    rating: {
      default: 5,
      type: Number,
      require: [true, "Rating is Required"],
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
