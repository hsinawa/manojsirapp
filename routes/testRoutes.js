const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Test = require("../models/testModel");

router.post("/addTest", async (req, res) => {
  try {
    const docs = await Test.find({});

    const { students } = req.body;

    const tempStudents = [
      {
        iDofStudent: "",
        NameOfStudent: "",
        email: "",
        SchoolName: "",
        contactnumber: "",
      },
    ];

    students?.map((stu) => {
      tempStudents.push({
        iDofStudent: stu._id,
        NameOfStudent: stu.name,
        email: stu.email,
        SchoolName: stu.schoolName,
        contactnumber: stu.contactnumber,
      });
    });

    const enq = new Test({
      name: req.body.name,
      standard: req.body.standard,
      comment: req.body.comment,
      dateOfExam: req.body.selectedDate,
      MaxMarks: req.body.MaxMarks,
      subject: req.body.subject,

      students: tempStudents.splice(1),
    });

    await enq.save();
    res.status(200).send({ message: "Added Successfully" });
  } catch (err) {
    console.log("error is", err);
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.get("/getall", async (req, res) => {
  try {
    const docs = await Test.find({});

    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});


module.exports = router;
