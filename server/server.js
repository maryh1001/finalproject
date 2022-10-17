require('dotenv').config()

const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/users')

// express app
const app = express()

app.use(express.static(path.resolve(__dirname, '../', 'client/build')))

// middleware
app.use(express.json()) //any req that comes in it looks if it has some data and then passes it and attaches it to the req object

// passing in 3 objects request, response, and next
// next has to be ran in order to move on to the next piece of middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
//this grabs all the different routes that are attach to the router in the workouts.js file
//first argument makes it to where you only find these routes when you come to a specific path
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to database
mongoose.connect(process.env.ATLAS_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })