const express = require("express");
const mongoose = require("mongoose");

const app=express()
//middleware
app.use('/',(req,res,next)=>{
    res.send("connected")
})


//SWYpIL7VQBST9DdW
//bookStore



mongoose
  .connect(
    "mongodb+srv://admin:SWYpIL7VQBST9DdW@cluster0.pfxlr8c.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));