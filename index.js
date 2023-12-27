const express = require("express");
const mongoose = require("mongoose");
const router=require("./")

const app=express()
//middleware


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