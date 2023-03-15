# Exercise Tracker

> A relatively simple fullstack project that allows users to track workouts. Live demo [here](http://demoexamplecomingsoon.com 'Not a real link') (coming soon).

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

This is a simple MERN stack application to track user exercises. It's a helpful app for tracking (exercises or otherwise) and was intended to help me learn Authentication and continue to work on my fullstack building using the MERN stack.

## Tech Stack

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)
![Express](https://img.shields.io/badge/Express-CA4245.svg?style=for-the-badge&logo=Express&logoColor=white)

## Features

Login & Register Forms:

- Login Form
  ![login](ui/screenshots/login.png 'Login Page')

- Register Form
  ![register](ui/screenshots/register.png 'Register Page')

Exercise Log Form:

- Form to enter workout details:
  ![add workout](ui/screenshots/addworkout.png 'Form')

  - once details have been added, you can click to add the workout or clearn the form.

Exercise Details Card:

- Details of the workouts that have been saved

  ![workout card details](ui/screenshots/workoutcarddetails.png 'Workout Details')

  - you are able to see the workout name, details of the workout and also use the delete button

Authentication:

- Different users can only see their own workouts:
  ![user 1 workout details](ui/screenshots/user1.png 'Workout Details')
  ![user 2 workout details](ui/screenshots/user2.png 'Workout Details')

## Setup

### Run Locally

1. Clone repo locally
2. Change into API folder
3. Run `npm install` in your bash/command line
4. Change into UI folder
5. Run `npm install` in your bash/command line
6. In the API folder, run `npm run dev` in your bash/command line
7. Open [http://localhost:4000/hello-world](http://localhost:4000/hello-world) to view it in the browser.
8. In the UI folder, run `npm start` in your bash/command line
9. Open [http://localhost:3000](http://localhost:3000) to view it n the browser.

### Available Commands

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the UI folder directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

In the API folder directory, you can run:

`npm run dev`

Runs the server. Open [http://localhost:4000](http://localhost:4000) to view it in your browser. I am also using nodemon so the server will restart & page will reload when you save changes.

<!-- ## Usage

How does one go about using it? Provide various use cases and code examples here.

    write-your-code-here -->

## Project Status

Status: COMPLETE!

## Room for Improvement

Improvement Thoughts:

- Second part of this app is to add authentication for users to have accounts - DONE -
- Styling needs to be updated.
- I would like to change the user display email to a user display name.

To do:

- [x] Add Auth
- [ ] re-design
- [ ] display user name instead of email

## Acknowledgements

Many thanks to [Net Ninja](https://netninja.dev/), this project was based on [this tutorial](https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=1) from the [Net Ninja YouTube](https://www.youtube.com/@NetNinja) page!

## Contact

Created by [@azulverdosa](ellemocambo@gmail.com) - feel free to contact me!

- [LinkedIn](https://www.linkedin.com/in/avatorre/ 'linked')

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

## License

MIT License Copyright (c) [2023] [AvaElise]
