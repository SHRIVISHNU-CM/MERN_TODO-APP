const mongoose = require("mongoose");

const ListShema = new mongoose.Schema({
    todoItems:{
        type:String,
        required:[true,"Enter todo items"]
    }
},{timestamps:true})

module.exports = new mongoose.model("TODO",ListShema)