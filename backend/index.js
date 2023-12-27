const cors=require('cors')
const express = require("express");
const mongoose = require("mongoose");
const router=require("./routes/book-routes")


const app=express()
//middleware

app.use(cors())
app.use(express.json())
app.use("/books",router)

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