const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const StudentSchema = require("../models/studentModel");
var requestIp = require("request-ip");

router.post("/register", async (req, res) => {
  try {
    const existingStudent = await StudentSchema.findOne({
      email: req.body.email,
    });

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
      await student.save();

      return res.send({ message: "Registration Successful" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Something went wrong" });
  }
});

router.post("/login", async (req, res) => {
  const studentIp = requestIp.getClientIp(req);

  try {
    const docs = await StudentSchema.find({
      email: req.body.email,
      password: req.body.password,
    });

    if (docs.length > 0) {
      const localsave = {
        name: docs[0].name,
        _id: docs[0]._id,
        email: docs[0].email,
        standard: docs[0].standard,
      };

      const ipAd = {
        name: studentIp.toString(),
      };

      await docs[0].ipAddress.push(ipAd);

      await docs[0].save();

      const studentId = req.body.email;

      const upadtedCount = await StudentSchema.findOneAndUpdate(
        { email: studentId },
        { $inc: { totalLogins: 1 , ActiveLogins:1 } },
        { new: true }
      );

   

      if (!upadtedCount) {
        return res.status(400).json({ message: "ID not found" });
      }

     

      res.send(localsave);
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


router.post('/logout', async (req,res)=>{
    const studentId = req.body.email;
    try{
        const upadtedCount = await StudentSchema.findOneAndUpdate(
            { email: studentId },
            { $inc: { ActiveLogins: -1 } },
            { new: true } 
          );
      
          if (!upadtedCount) {
            return res.status(400).json({ message: "ID not found" });
          }

        return  res.status(200).send({ message: "Logged Out Successfully" });

    }catch (err){
        return res.status(400).json({ message: `Something Went Wrong ${err} ` });
    }

  

   
} )


router.get("/getall", async (req, res) => {
  console.log('Getting all.....')
  try {
    const docs = await StudentSchema.find({} );
    
console.log('Docs are', docs)
    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

module.exports = router;
