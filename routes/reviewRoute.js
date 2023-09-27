const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Review = require("../models/reviewModel");

router.post("/addReview", async (req, res) => {
  try {
    const docs = await Review.find({});

    const rev = new Review({
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      schoolName: req.body.schoolName,
      rating: req.body.rating,
    });

    await rev.save();

    res.status(200).send({ message: "Review Added Successfully" });
  } catch (err) {
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.get("/getall", async (req, res) => {
  try {
    const docs = await Review.find({});

    res.status(200).send(docs);
  } catch (err) {
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.get("/getvalid", async (req, res) => {
  try {
    const docs = await Review.find({ isValid: true });

    res.status(200).send(docs);
  } catch (err) {
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.post("/updateStatus", async (req, res) => {
  try {
    const id = req.body.id;
    const UpdatedStatus = await Review.findByIdAndUpdate(
      { _id: id },
      {
        isValid: req.body.isValid,
      }
    );
    if (!UpdatedStatus) {
      return res.status(400).json({ message: "Could not update" });
    }

    return res.status(200).send({ message: "Updated Successfully" });
  } catch (err) {
    return res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

module.exports = router;
