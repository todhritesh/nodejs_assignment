const express = require('express')
router = express.Router()
const {
home , addData
} = require('../controllers/homeController')

router.get('/',home)
router.get('/add-data',addData)


module.exports = router