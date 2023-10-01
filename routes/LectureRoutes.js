const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Lecture = require('../models/lectureModel')
router.post("/addTest", async (req, res) => {
    try {
      const docs = await Lecture.find({});
  
      

      const enq = new Lecture({
        name: req.body.name,
        standard: req.body.standard,
        comment: req.body.comment,
        link:req.body.link
  
        
      });
  
      await enq.save();
      res.status(200).send({ message: "Added Successfully" });
    } catch (err) {
      console.log("error is", err);
      res.status(400).json({ message: `Something Went Wrong ${err} ` });
    }
  });
  
  router.post("/getall", async (req, res) => {
    
    try {
      const {stand} = req.body
      const docs = await Lecture.find({standard:stand});
  
      res.send(docs);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Something Went Wrong" });
    }
  });
  
  router.post("/addNotes", async (req, res) => {
    try {
      const updatedTask = await Lecture.findByIdAndUpdate(
        req.body.reportdata.id,
        { notesURL: req.body.reportdata.resultURL },
        { new: true }
      );
      res.send(updatedTask);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Something Went Wrong" });
    }
  });
  
  router.post("/addAssignment", async (req, res) => {
    try {
      const updatedTask = await Lecture.findByIdAndUpdate(
        req.body.reportdata.id,
        { assignmentURL: req.body.reportdata.resultURL2 },
        { new: true }
      );
      res.send(updatedTask);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Something Went Wrong" });
    }
  });
  
  router.post("/updateStatus", async (req, res) => {
    try {
      const id = req.body.testid;
      const UpdatedStatus = await Lecture.findByIdAndUpdate(
        { _id: id },
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

module.exports = router