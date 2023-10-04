const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Review = require("../models/reviewModel");
const nodemailer = require("nodemailer");

router.post("/addReview", async (req, res) => {
  try {
    const docs = await Review.find({});

    const rev = new Review({
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      schoolName: req.body.schoolName,
      rating: req.body.value,
    });

    await rev.save();

    const HTMLtemplate = `
    <html>
    <head>
      <meta charset="utf-8">
      <title>Conncted with Concept2Education</title>
      <!-- Inline CSS styles for email client compatibility -->
      <style>
        body, html {
          margin: 0;
          padding: 0;
        }
        body {
          background-color: #f4f4f4;
        }
       .email-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 5px;
        }
       .header {
          background-color: #007bff;
          color: #fff;
          text-align: center;
          padding: 10px;
          border-radius: 5px 5px 0 0;
        }
        .content {
          padding: 20px;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        .btn {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Thankyou for Review!</h1>
        </div>
        <div class="content">
          <p>Hello, ${req.body.name},</p>
          <p>We hope this email finds you well. We wanted to take a moment to express our sincere gratitude for your recent review of our Classes.</p>
          <p>Your feedback is invaluable to us, and we genuinely appreciate the time and effort you took to share your thoughts and experiences. Reviews like yours play a crucial role in helping us understand what we're doing right and where we can improve.</p>
          <p>Stay Safe!</p>
          <p>Warm Regards,</p>
          <p>Concept Classes</p>
        </div>
      </div>
    </body>
    </html>
    `

    const msg = {
      from: process.env.EMAIL_ID,
      to: `${req.body.email}`,
      subject: `Thankyou for Reviewing Us!`,
      html:HTMLtemplate,
    };
    nodemailer
      .createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_KEY,
        },
        port: 465,
        host: `smtp.gmail.com`,
      })
      .sendMail(msg, (err) => {
        if (err) {
          console.log("Error is", err);
        } else {
          console.log("Email sent to", req.body.email);
        }
      });


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

router.post("/GetDescription", async (req, res) => {
    try {
      const { reviewid } = req.body;
  
      const Descriptiondata = await Review.find({ _id: reviewid });
  
      res.status(200).send(Descriptiondata);
    } catch (err) {
      return res.status(400).json({ message: `Something Went Wrong ${err} ` });
    }
  });


router.post("/updateStatus", async (req, res) => {
  try {
    const {reviewid} = req.body;
    
    const UpdatedStatus = await Review.findByIdAndUpdate(
      { _id: reviewid },
      {
        isValid: req.body.AccountStatus,
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
