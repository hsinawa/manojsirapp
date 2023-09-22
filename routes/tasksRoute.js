const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require("../models/tasksModel");
const moment = require("moment-timezone");

router.post("/addtask", async (req, res) => {
  try {
    const docs = await Task.find({});

    const utcTimestamp = `${new Date(req.body.cdate)}`;
    const istTimestamp = moment.utc(utcTimestamp).tz("Asia/Kolkata").format();

    const enq = new Task({
      name: req.body.name,
      comment: req.body.comment,
      datetest: istTimestamp?.toString().substr(0, 10),
      id: req.body._id,
    });

    await enq.save();

    res.send({ message: "Task Added Successfully" });
  } catch (err) {
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.post("/getall", async (req, res) => {
  try {
    const getDate = req.body.date?.toString().substr(0, 10);
    
    const docs = await Task.find({ id: req.body._id, datetest: getDate });
    
    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

router.post("/getall2", async (req, res) => {
  try {
    const utcTimestamp = `${new Date(req.body.date)}`;
    const istTimestamp = moment.utc(utcTimestamp).tz("Asia/Kolkata").format();
    
    const docs = await Task.find({
      id: req.body._id,
      datetest: istTimestamp?.toString().substr(0, 10),
    });
   
    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

router.post("/update", async (req, res) => {
  try {
    const { id, status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status: !status },
      { new: true }
    );

    res.send(updatedTask);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

module.exports = router;
