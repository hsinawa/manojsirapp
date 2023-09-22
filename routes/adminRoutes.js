const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = require('../models/adminModel')

router.post("/register", (req, res) => {
    Admin.find({ email: req.body.email }, (err, docs) => {
      if (docs.length > 0) {
        return res.status(400).send({ message: "Email Already Registered" });
      } else {
        const user = new Admin({
          name: req.body.name,
          lname: req.body.lname,
          email: req.body.email,
          password: req.body.password,
          contactnumber: req.body.contactnumber,
        });
  
        user.save((err) => {
          if (!err) {
            return res.send({ message: "Registration Successful" });
          } else {
            return res.send({ message: "Something went wrong" });
          }
        });
      }
    });
  });
  
  router.post("/login", async (req, res) => {
    try {
    
      
      const docs = await Admin.find({
        email: req.body.email,
        password: req.body.password
      });
  
      if (docs.length > 0) {
        const localsave = {
          name: docs[0].name,
          _id: docs[0]._id,
          email: docs[0].email,
          lname: docs[0].lname
        };
        
        
        res.send(localsave);
      } else {
       
        res.status(400).json({ message: "Invalid Credentials for Admin" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
module.exports = router;