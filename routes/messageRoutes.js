const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const EnquireSchema = require("../models/messageModel");
const nodemailer = require("nodemailer");

router.post("/postEnq", async (req, res) => {
  try {
    const docs = await EnquireSchema.find({});

    const enq = new EnquireSchema({
      name: req.body.name,
      contact: req.body.number,
      comment: req.body.message,
    });

    await enq.save();

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
          <h1>Thankyou for Connecting with Us</h1>
        </div>
        <div class="content">
          <p>Hello, ${req.body.name}! Concept to Education has received your message, we'll get in touch with you soon. </p>
          <p>Stay Safe!</p>
          <p>Concept to Education</p>
        </div>
      </div>
    </body>
    </html>
    `

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
          <p>Hello, COncept 2 Education ! ${req.body.name} has messaged you .  </p>
          <p> Content of message :  ${req.body.message} </p>
          <p> Contact ID: ${req.body.number} </p>
          <p>Stay Safe!</p>
          <p>Concept to Education</p>
        </div>
      </div>
    </body>
    </html>
    `

    
    const msg = {
      from: process.env.Email,
      to: `${req.body.number}`,
      subject: `Messaged Received`,
      html:HTMLtemplate,
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
      .sendMail(msg, (err) => {
        if (err) {
          console.log("Error is", err);
        } else {
          console.log("Email sent to", req.body.number);
        }
      });

     
      const msg2 = {
        from: process.env.Email,
        to: `nilesh3900@gmail.com`,
        subject: `Messaged Received`,
        html:HTMLtemplateSender,
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

      res.send({ message: "Message Sent Successfully" });
  } catch (err) {
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.get("/getall", async (req, res) => {
  try {
    const docs = await EnquireSchema.find({});

    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

module.exports = router;
