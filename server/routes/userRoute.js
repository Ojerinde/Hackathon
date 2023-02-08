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

userRouter
.get('/logout', userController.logout);


module.exports = userRouter