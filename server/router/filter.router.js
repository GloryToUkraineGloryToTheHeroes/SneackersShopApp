const express = require('express')
const FilterController = require('../controller/filter.controller')

const router = express.Router()

router.post('/upload/some/manufactures', FilterController.uploadManufacturers)

module.exports = router