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
      
    },

    schoolName:{
      type: String,
      require: [true, "Enter School Name"],
      trim: true,
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

    isValid :{
      type:Boolean,
      require,
      default:false
    }
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
