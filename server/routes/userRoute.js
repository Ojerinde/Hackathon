const express = require('express')


const userRouter = express.Router()
const userController =require('../controllers/userController')
const userValidation = require('../utils/userValidator')

userRouter
    .post('/signup',
    userValidation.RegisterValidation, userController.signup )
    
userRouter
    .post('/login',
    userValidation.LoginValidation,userController.login )


module.exports = userRouter