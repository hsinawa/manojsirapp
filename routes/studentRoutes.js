const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const StudentSchema = require("../models/studentModel");
var requestIp = require('request-ip');



router.post("/register", async (req, res) => {
  try {
    
    const clientIp = requestIp.getClientIp(req); 
    console.log("IP Address is", clientIp);

   
    const existingStudent = await StudentSchema.findOne({ email: req.body.email });

    if (existingStudent) {
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

      console.log('saving....');

      
      await student.save();

      return res.send({ message: "Registration Successful" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Something went wrong" });
  }
});



module.exports = router;