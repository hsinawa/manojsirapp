const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Test = require('../models/testModel')

router.post('/addTest', async(req,res)=>{
    try{

        

    }catch (err){
        res.status(400).json({ message: `Something Went Wrong ${err} ` });
    }
} )


module.exports = router