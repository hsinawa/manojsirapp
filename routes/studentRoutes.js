const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const StudentSchema = require("../models/studentModel");

router.post("/register", (req, res) => {
    StudentSchema.find({ email: req.body.email }, (err, docs) => {
      if (docs.length > 0) {
        return res.status(400).send({ message: "Email Already Registered" });
      } else {
        const student = new StudentSchema({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          contactnumber: req.body.contactnumber,
          standard: req.body.standard,
          schoolName: req.body.schoolName,

        });
  
        student.save((err) => {
          if (!err) {
            return res.send({ message: "Registration Successful" });
          } else {
            return res.send({ message: "Something went wrong" });
          }
        });
      }
    });
  });


module.exports = router;