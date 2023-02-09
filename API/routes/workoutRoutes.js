const express = require('express');
const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  editWorkout,
  deleteWorkout,
} = require('../controllers/workoutController');

//instance of Router
const router = express.Router();

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
