require("dotenv").config();
const express = require("express");
const app = express();
const database = require('./database/connection')
const cors = require('cors');
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT||5002;


app.listen(PORT,()=>console.log(`Server is runnning at ${PORT}`))