require("dotenv").config();
const express = require("express");
const app = express();
const database = require('./database/connection');
const router = require('./routes/router')
const cors = require('cors');
app.use(cors());
app.use(express.json());

const PORT = 3001||process.env.PORT;
app.use('/api/',router)

app.listen(PORT,()=>console.log(`Server is runnning at ${PORT}`))