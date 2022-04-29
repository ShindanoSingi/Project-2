// env variable
require("dotenv").config();

const express = require("express");

const axios = require("axios");

// mongodb user model
const User = require("../models/users-model");

let userTitle = "";

// VALIDATION
// Source: https://www.youtube.com/watch?v=2jqok-WgelI
const Joi = require("@hapi/joi");

// Validation schema. This will validate the user's email and password
const validationSchema = Joi.object({
  firstName: Joi.string().min(2).required(),
  middleName: Joi.string().allow(null, ""),
  lastName: Joi.string().min(2).required(),
  email: Joi.string().min(6).email().required(),
  password: Joi.string().min(6).required(),
});



// Define a router
const router = express.Router();


// Render all data from database to the browser "adminPage"
router.get("/", (req, res) => {
  User.find({}).then((userData) => res.render("adminPage", { userData }));
});


router.get("/signUp", (req, res) => {
  res.render("signUpPage", { message: "" });
});

// Route to home page
router.get("/homePage", (req, res) => {
  res.render("homePage");
});


// Add a user to the database, then go to the home screen
router.post("/signUp", (req, res) => {
  // NOW VALIDATE THE USER
  // Source: https://www.youtube.com/watch?v=2jqok-WgelI
  console.log(req.body);
  // Store the error message in the variable in the form of object
  let error = validationSchema.validate(req.body);

  // For Postman
  // res.send(errorMsg);

  // Show the user the error message
  if (error) {
    // Create a variable to hold the error message
    let errorMsg = error.error.details[0].message.charAt(0) + error.error.details[0].message.charAt(1).toUpperCase() + error.error.details[0].message.substring(2) + ".";

     console.log(error)
    //const errorMsg = error.details[0].message;

    // Print the error message
    console.log(errorMsg);

    res.render("signUpPage", { message: errorMsg });
  }

  // Create the accout for the new user if there is no error in the message
  if (!error) {

    //  Push the user's information into the database
    User.create(req.body).then((res) => res.redirect("/homePage"));
    
  }
});

// When "Already signed in?" link is clicked, redirect to "sign in" page
router.get("/signIn", (req, res) => {
  res.render("signInPage");
});

// Sign in page; if the email and password match the account in the database, redirect to songs library app
router.post("/signIn", (req, res) => {
  User.find({ email: req.body.email }).then((userData) => {
    // console.log(req.body)
    // console.log(userData)

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=500&q=${userTitle.title}&key=${process.env.API_KEY}`;

    if (userData[0].password === req.body.password) {
      axios.get(url).then((data) => {
        res.render("songsLibPage", {
          searchedTitle: data.data.items,
          userData: userData[0],
        });
      });
    } else {
      res.redirect("signIn");
    }
  });
});

// Update the user in the database, then go to the home screen
router.put("/:id", (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body).then((userData) =>
    res.redirect("/")
  );
});

// Find the user in the database by id in the edit screen/window, shows that info. on edit page
router.get("/:id/edit", (req, res) => {
  console.log(req.params.id);
  User.findById(req.params.id).then((userData) => {
    console.log(req.params.id);
    res.render("editPage", { userData });
  });
});

// Delete a user from database, then go to the home screen
router.delete("/:id", (req, res) => {
  User.findOneAndRemove({ _id: req.params.id }).then((userData) =>
    res.redirect("/")
  );
});

// The code below is for songs API and User interaction with the API
// Sign in page; if the email and password match the account in the database, redirect to songs library app
// The "/songsLib" is what I specified in the action in the form in the ejs file
// The "res.render('songsLibPage');" is where the information will be sent to.
// This code is responsible of capturing searched information in the input box from songsLibPage
router.post("/songsLib", (req, res) => {
  userTitle = req.body;
  // console.log(userTitle.title)
  //res.render('songsLibPage', { searchedTitle: userTitle.title });

  // The url is loaded with the user's searched word, and ready to be used by Axios
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=500&q=${userTitle.title}&key=${process.env.API_KEY}`;

  axios.get(url).then((data) => {
    console.log(data.data.items[0].snippet);
    // console.log(data.data.items[0].snippet.thumbnails.default.url)
    res.render("songsLibPage", { searchedTitle: data.data.items });
  });
});

// The code below redirect the user to the update page when he/she clicks on forgot email or password
router.put("/update/:id", (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body).then((userData) =>
    res.redirect("/signIn")
  );
});

// The code below renders the forget page to let the user update the email or password
// When "forgot emai or password?" link is clicked, redirect to "forgotPage" page
router.get("/forgetPage", (req, res) => {
  res.render("forgetPage");
});

// Update the user's email or password in the database, then go to the sign in page
router.put("/update/:id", (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body).then((password) =>
    res.redirect("signIn")
  );
});

module.exports = router;
