const express = require('express')
const UserController = require('../controller/user.controller')

const router = express.Router()

router.post('/token/check', UserController.checkToken)
router.post('/product/add', UserController.addProduct)
router.get('/token/create', UserController.createToken)

module.exports = router