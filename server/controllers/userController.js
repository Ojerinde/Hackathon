const userModel = require('../models/userModel')
const catchAsync = require("../utils/catchAsync")
const jwt = require("../utils/jsonWeb")

exports.signup = catchAsync(async (req, res,next) =>{
    const newUser = await userModel.create(req.body)
    const token = jwt.signToken(newUser._id,req, res)
    res
        .status(201)
        .json({
            status:"success", 
            message:"user registered",
            token})
})

exports.login = catchAsync(async (req, res,next) => {
    const user = await userModel.findOne({ email:req.body.email }).select('+password');

    if (!user || !(await user.isValidPassword(req.body.password))) {
        return next({
            status:401,
            message:"Incorrect email or password"
        })
      }

    const token = jwt.signToken(user._id, req, res)
    res
        .status(201)
        .json({
            status:"success", 
            message:"user logged in",
            token})
})

exports.logout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    });
    res.status(200).json({ status: 'success' });
  };