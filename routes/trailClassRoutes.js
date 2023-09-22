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

    const HTMLtemplateSender = `
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
         <h1>New Message</h1>
       </div>
       <div class="content">
         <p>Hello, COncept 2 Education ! ${
           req.body.name
         } has requested for new trial class.  </p>
         <p> Contact Details :  ${req.body.contact} </p>
         <p> Class: ${req.body.standard} , Subject: ${req.body.subject} </p>
         <p> Date : ${istTimestamp?.toString().substr(0, 10)} </p>
         <p>Stay Safe!</p>
         <p>Concept to Education</p>
       </div>
     </div>
   </body>
   </html>
   `;

    const msg2 = {
      from: process.env.Email,
      to: `nilesh3900@gmail.com`,
     
      subject: `New Trial Class`,
      html: HTMLtemplateSender,
    };
    nodemailer
      .createTransport({
        service: "gmail",
        auth: {
          user: process.env.Email,
          pass: process.env.passKey,
        },
        port: 465,
        host: `smtp.gmail.com`,
      })
      .sendMail(msg2, (err) => {
        if (err) {
          console.log("Error is", err);
        } else {
          console.log("Email sent to admin");
        }
      });
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
