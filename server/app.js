require('dotenv').config()

const express = require('express') 
const cookieParser = require('cookie-parser'); 



const userRouter = require('./routes/userRoute')

const app = express()


app.use(express.json());
app.use(cookieParser())

//routes
app.get('/', (req,res) => {
  res.status(200).json({message:"welcome to chatapp"})
})

app.use('/api/v1/users', userRouter);

// Handle error for unknown route
app.use('*', (req, res) => {
  return res.status(404).json({ message: 'route not found' })
})
//Error-handling middleware
app.use((err, req, res, next) => {
    console.log(err)
    // if (err.code === 11000) {
    //   const errorStatus = 400,
    //     err= "Email already exists"
    // }
  
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)
    next()
})


module.exports = app