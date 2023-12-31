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

router.post("/getall", async (req, res) => {
  
  try {
    const {stand} = req.body
    const docs = await Test.find({standard:stand});

    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

router.post("/getGraph", async (req, res) => {
  
  try {
    const {stand} = req.body
    const pipeline = [
      {
        $match: {
          standard: parseInt(stand),
          isValid: false,
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          MaxMarks: 1,
          subject:1,
          students:1
        },
      },
    ];
    const docs = await Test.aggregate(pipeline);

    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

router.post("/addQuestionPaper", async (req, res) => {
  try {
    const updatedTask = await Test.findByIdAndUpdate(
      req.body.reportdata.id,
      { testPaperLink: req.body.reportdata.resultURL },
      { new: true }
    );
    res.send(updatedTask);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

router.post("/addAnswerPaper", async (req, res) => {
  try {
    const updatedTask = await Test.findByIdAndUpdate(
      req.body.reportdata.id,
      { answerLink: req.body.reportdata.resultURL2 },
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
    const UpdatedStatus = await Test.findByIdAndUpdate(
      { _id: id },
      {
        isValid: !req.body.AccountStatus,
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

router.post("/GetDescription", async (req, res) => {
  try {
    const { testid } = req.body;

    const Descriptiondata = await Test.find({ _id: testid });

    res.status(200).send(Descriptiondata);
  } catch (err) {
    return res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.post("/addResult", async (req, res) => {
  try {
    const docs = await Test.findByIdAndUpdate(
      { _id: req.body.tid },
      {
        students: req.body.data,
      },
      { new: true }
    );

    res.status(200).send(docs);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

module.exports = router;
