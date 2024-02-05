require("dotenv").config()
const express = require("express");
const app = express()

const PORT = process.env.PORT||5002;


app.listen(PORT,()=>console.log(`Server is runnning at ${PORT}`))