const express = require("express")
const router = express.Router()
const { getItems, saveItems, updateItems, deleteItems }= require("../controller/controller")

router.get('/',getItems)
router.post('/save',saveItems)
router.put('/update/:id', updateItems)
router.delete ('/delete/:id', deleteItems)

module.exports = router