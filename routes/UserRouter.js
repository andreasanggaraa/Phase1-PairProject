const userRouter = require('express').Router()
const UserController = require('../controllers/UserController.js');

userRouter.get('/', UserController.dashboard)

module.exports = userRouter