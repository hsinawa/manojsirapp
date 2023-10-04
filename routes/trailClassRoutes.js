const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TrailClass = require("../models/trialClassModel");
const moment = require("moment-timezone");
const nodemailer = require("nodemailer");

router.post("/bookclass", async (req, res) => {
  try {
    const docs = await TrailClass.find({});
    const utcTimestamp = `${new Date(req.body.date)}`;
    const istTimestamp = moment.utc(utcTimestamp).tz("Asia/Kolkata").format();

    const enq = new TrailClass({
      name: req.body.name,
      contact: req.body.contact,
      standard: req.body.standard,
      subject: req.body.subject,
      date: istTimestamp?.toString().substr(0, 10),
    });

    await enq.save();
    res.send({ message: "Message Sent Successfully" });

 


  } catch (err) {
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.get("/getall", async (req, res) => {
  try {
    const docs = await TrailClass.find({});

    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

module.exports = router;
