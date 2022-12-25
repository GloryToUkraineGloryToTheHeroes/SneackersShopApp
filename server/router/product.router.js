const express = require('express')
const ProductController = require('../controller/product.controller')

const router = express.Router()

router.post('/upload/single', ProductController.uploadSingleProduct)
//router.post('/upload/some/manufacturers', ProductController.uploadSomeManufacturers)
router.get('/upload/all', ProductController.uploadProducts)

module.exports = router