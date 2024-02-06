const todo = require("../database/databaseSchema")

module.exports.getItems = async(req,res)=>{
    const item = await todo.find()
    res.send(item).json(item)
}

module.exports.saveItems = (req,res)=>{
    const { todoItems }= req.body;
    todo.create({ todoItems })
    .then((data)=>{
        console.log(data)
        res.status(201).json({"Todo Item Created":data});
        })
        .catch((err)=> {
            console.log(err);
            res.status(500).json({error: err});
            });
}

module.exports.updateItems = (req,res)=>{
    const id = req.params.id;
    const {todoItems} = req.body;
    todo.findByIdAndUpdate(id, {todoItems})
    .then((data)=>{
        console.log("Updated successfully")
        res.status(201).json(data)
    })
    .catch((e)=>console.log(e))
}
module.exports.deleteItems = (req, res) => {
    const id =req.params.id;
    
    todo.findByIdAndDelete(id)
        .then((data) => {
            console.log("deleted successfully")
            res.status(201).json(data)
        })
        .catch((e) => console.log(e))
}