const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Test = require("../models/testModel");

router.post("/addTest", async (req, res) => {
  try {
    const docs = await Test.find({});

    const {students} = req.body
    console.log('here is')
    const tempStudents = [{
        iDofStudent:'',
        NameOfStudent:'',
        email:'',
        SchoolName:'',
        contactnumber:''
 }]

 students?.map(stu=>{
     tempStudents.push({
        iDofStudent: stu._id,
        NameOfStudent: stu.name,
        email:stu.email,
        SchoolName:stu.schoolName,
        contactnumber:stu.contactnumber
     })
 })
console.log('Temp Students rae', tempStudents)
     const enq = new Test({
      name: req.body.name,
      standard: req.body.standard,
      comment: req.body.comment,
      dateOfExam: req.body.dateOfExam,
      MaxMarks: req.body.MaxMarks,
      subject:req.body.subject,

      students: tempStudents.splice(1)
    });

    await enq.save();
    res.status(200).send({message:'Added Successfully'})
  } catch (err) {
      console.log('error is', err)
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

module.exports = router;
