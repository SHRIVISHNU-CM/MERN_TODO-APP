const express = require("express")
const router = express.Router()
const { getItems, saveItems, updateItems, deleteItems }= require("../controller/controller")

router.get('/get',getItems)
router.post('/save',saveItems)
router.put('/update/:id', updateItems)
router.deletegit ('/delete/:id', deleteItems)

module.exports = router