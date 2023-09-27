const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Result = require("../models/resultModel");

router.post("/addresult", async (req, res) => {
  console.log('Hereee')
  try {
    const docs = await Result.find({});
    
    const enq = new Result({
      name: req.body.name,
      resultURL: req.body.resultURL,
      standard: req.body.standard,
    });

    await enq.save();

    res.send({ message: "Result Added Successfully" });
  } catch (err) {
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

  router.get("/getall", async (req, res) => {
    try {
     

      const docs = await Result.find({ });

      res.send(docs);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Something Went Wrong" });
    }
  });
module.exports = router;