const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

const getAllWorkouts = async (req, res) => {
  const user_id = req.user._id;

  const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });

  return res.status(200).json(workouts);
};

const createWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;

  const emptyFields = [];

  if (!title) {
    emptyFields.push('title');
  }
  if (!weight) {
    emptyFields.push('weight');
  }

  if (!reps) {
    emptyFields.push('reps');
  }

  if (emptyFields.length > 0) {
    console.log(emptyFields);
    return res.status(400).json({ error: 'These fields require input', emptyFields });
  }

  //add doc to db
  try {
    const user_id = req.user._id;
    const workouts = await Workout.create({ title, reps, weight, user_id });
    return res.status(200).send(workouts); //.json vs .send ??
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ error: err.message });
  }
};

const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: 'No workout found' });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(400).json({ err: 'No workout found' });
  }

  res.status(200).json(workout);
  console.log(req.params);
};

const editWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: 'No workout found' });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(400).json({ err: 'No workout found' });
  }

  return res.status(200).json(workout);
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: 'No workout found' });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ err: 'No workout found' });
  }

  return res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  editWorkout,
  deleteWorkout,
};
