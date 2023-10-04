const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const StudentSchema = require("../models/studentModel");
var requestIp = require("request-ip");
const nodemailer = require("nodemailer");

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
            <h1>Account Created Successfully!</h1>
          </div>
          <div class="content">
            <p>Hello, ${req.body.name}! Your Account has been created Successfully, You'll be able to use your account once it has been validated by admin. </p>
            <p>Stay Safe!</p>
            <p>Concept CLasses</p>
          </div>
        </div>
      </body>
      </html>
      `

      const msg = {
        from: process.env.EMAIL_ID,
        to: `${req.body.email}`,
        subject: `New Account Created!`,
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
        { $inc: { totalLogins: 1, ActiveLogins: 1 } },
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
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/logout", async (req, res) => {
  const studentid = req.body.studentid;
  
  try {
    const upadtedCount = await StudentSchema.findByIdAndUpdate(
      { _id: studentid },
      { $inc: { ActiveLogins: -1 } },
      { new: true }
    );

    if (!upadtedCount) {
      return res.status(400).json({ message: "ID not found" });
    }

    
    return res.status(200).send({ message: "Logged Out Successfully" });
  } catch (err) {
    return res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.get("/getall", async (req, res) => {
  try {
    const pipeline = [
      {
        $project: {
          name: 1,
          standard: 1,
          totalLogins: 1,
          ActiveLogins: 1,
          isAccountValid: 1,
        },
      },
    ];

    const result = await StudentSchema.aggregate(pipeline);

    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

router.post("/getValidByClass", async (req, res) => {
  try {
    const { standard } = req.body;

    const pipeline = [
      {
        $match: {
          standard: standard,
          isAccountValid: true,
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          email: 1,
          schoolName: 1,
          contactnumber: 1,
        },
      },
    ];

    const docs = await StudentSchema.aggregate(pipeline);
   
    res.status(200).send(docs);
  } catch (err) {
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

router.post("/updateStatus", async (req, res) => {
  try {
    const id = req.body.studentid;
    const UpdatedStatus = await StudentSchema.findByIdAndUpdate(
      { _id: id },
      {
        isAccountValid: req.body.AccountStatus,
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




router.post("/updateProfile", async (req, res) => {
  try {
    const id = req.body.studentid;
    
    const UpdatedStatus = await StudentSchema.findByIdAndUpdate(
      { _id: id },
      {
        email: req.body.AccountStatus.email,
        standard:req.body.AccountStatus.stand,
        contactnumber:req.body.AccountStatus.contactNumber,
        schoolName:req.body.AccountStatus.schoolName
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






router.post("/passWordUpdate", async (req, res) => {
  try {
    const {studentphoneNumber, newPassword} = req.body;
    
    const UpdatedStatus = await StudentSchema.findOneAndUpdate(
      { contactNumber: studentphoneNumber , isAccountValid:true},
      {
        password:newPassword
      },
      {new:true}
    );

    
    if (!UpdatedStatus) {
     
      return res.status(400).json({ message: "Could not update" });
    }

    return res.status(200).send({ message: "Updated Successfully" });
  } catch (err) {
    console.log('ERRR', err)
    return res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});





router.post("/GetDescription", async (req, res) => {
 
  try {
    const { studentid } = req.body;

    const Descriptiondata = await StudentSchema.find({ _id: studentid });
    
    res.status(200).send(Descriptiondata);
  } catch (err) {
    return res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

module.exports = router;
