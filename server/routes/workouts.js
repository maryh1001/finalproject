const express = require('express')
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

//creates instance
const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// attach routers
//this fires when you access /api/workout/ and should get you all of the workouts
router.get('/', getWorkouts)

//this fires when you access /api/workout/:id and should get you a single workout :id represents a route parameter whereby the id can change
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router