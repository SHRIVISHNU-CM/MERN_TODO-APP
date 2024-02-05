const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION)
.then(()=>console.log("database connected"))
.catch((e)=>console.log(e))

module.exports = mongoose

