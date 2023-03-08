const express = require('express');
const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  editWorkout,
  deleteWorkout,
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

//instance of Router
const router = express.Router();

//require auth middleware for all workout routes
router.use(requireAuth);

//GET all workouts
router.get('/', getAllWorkouts);

//CREATE a workout
router.post('/', createWorkout);

// GET a single workout
router.get('/:id', getWorkout);

//EDIT a workout
router.post('/:id', editWorkout);

//DELETE a workout
router.delete('/:id', deleteWorkout);

module.exports = router;
