//secrets file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes');

//create express app server
const app = express();

//define corsConfig
const corsConfig = {
  origin: true,
  credentials: true,
};

//then use config
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));

//middleware
app.use(express.json()); //read .json files

app.use((req, res, next) => {
  //log requests
  console.log(req.path, req.method);
  next();
});

//routes
app.get('/hello-world', (req, res) => {
  res.send('Welcome to the app 🙈 🙉 🙊');
});

app.use('/workouts', workoutRoutes);
app.use('/user', userRoutes);

//Mongoose connect to DB
mongoose.set('strictQuery', false); //for Mongoose7 update

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        'MongoDB connection established & Express server running on port',
        process.env.PORT,
        '🎉'
      );
    });
  })
  .catch((err) => {
    //or catch an error
    console.log(err);
  });
