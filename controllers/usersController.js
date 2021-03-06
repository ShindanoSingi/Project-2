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

// Redirect to "sign in" page
router.get("/signIn", (req, res) => {
  res.render("signInPage");
});

// Redirect to "songsLibPage" page
router.get("/songsLibPage", (req, res) => {
  res.render("songsLibPage");
});

// Sign in page; if the email and password match the account in the database, redirect to songs library app
router.post("/signIn", (req, res) => {
  User.find({ email: req.body.email }).then((userData) => {
    if (req.body.password === "rr") {
      res.redirect("/");
    } else if (
      req.body.password !== "rr" &&
      userData[0].password === req.body.password
    ) {
      let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${userTitle.title}&key=${process.env.API_KEY}`;

      axios.get(url).then((data) => {
        res.render("songsLibPage", {
          searchedTitle: data.data.items,
          userData: userData[0],
        });
      });
    }
  });
});

// Add the user to the database, then go to the home screen

router.post("/signUp", (req, res) => {
  // NOW VALIDATE THE USER
  // Source: https://www.youtube.com/watch?v=2jqok-WgelI
  // Store the error message in the variable in the form of object
  let error = validationSchema.validate(req.body);

console.log(error)

  // Show the user the error message
  if (error.error) {
    // Let the user know about clicking on the question for more info.
    const message = `Please click on the "?" on the right for more information.`;
    res.render("signUpPage", {message: message});
  } else {
    // Create the accout for the new user if there is no error in the message
    //  Push the user's information into the database
    User.create(req.body).then(() => res.redirect("homePage"));
  }
});

// // Sign in page; if the email and password match the account in the database, redirect to songs library app
// router.post("/signIn", (req, res) => {
//   User.find({ email: req.body.email }).then((userData) => {

//     let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=500&q=${userTitle.title}&key=${process.env.API_KEY}`;

//     if (userData[0].password === req.body.password) {
//       axios.get(url).then((data) => {
//         res.render("songsLibPage", {
//           searchedTitle: data.data.items,
//           userData: userData[0],
//         });
//       });
//     } else {
//       res.redirect("signIn");
//     }
//   });
// });

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

module.exports = router;
