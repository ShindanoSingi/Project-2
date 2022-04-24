require('dotenv').config()
const express = require("express");
const axios = require('axios')
const User = require("../models/users-models");

let userTitle = '';
let songs = [];

// // I am using this youtube API. This API return results based on specified country
// urlCountry = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1000000000&regionCode=TZ&key=AIzaSyA9ZcRubHdOkYqfjF3MVPhCLsp_fMgt1Ug"

// This API searches by title
url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1000000000&q=Rayvanny&key=AIzaSyA9ZcRubHdOkYqfjF3MVPhCLsp_fMgt1Ug"



// Define a router
const router = express.Router();

// Render all data form database to the browser "index"
router.get("/", (req, res) => {
    User.find({})
        .then((userData) => res.render('adminPage', { userData }));
});

router.get('/signUp', (req, res) => {
    res.render('signUpPage')
})

// When "Already signed in?" link is clicked, redirect to "sign in" page 
router.get('/signIn', (req, res) => {
    res.render('signInPage');
})

router.get('/homePage', (req, res) => {
    res.render('homePage')
})

// Sign in page; if the email and password match the account in the database, redirect to songs library app
router.post("/signIn", (req, res) => {
    User.find({})
        .then((userData) => res.render('songsLibPage', { userData }));
});

// Update a user by firstName in the database, then go to the home screen
router.put("/:id", (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body).then(
        (userData) => res.redirect('/')
    );
});

// Update a user by lastName in the database, then go to the home screen
router.put("/:email", (req, res) => {
    User.findOneAndUpdate({ name: req.params.email }, req.body).then(
        (userData) => res.redirect('/')
    );
});

// Update a user by lastName in the database, then go to the home screen
router.put("/:password", (req, res) => {
    User.findOneAndUpdate({ name: req.params.password }, req.body).then(
        (userData) => res.redirect('/')
    );
});

// Find a user in the database by id in the edit screen/window
router.get('/:id/edit', (req, res) => {
    User.findById(req.params.id).then(userData => {
        res.render('editPage', { userData })
    })
})

// Delete a user from database, then go to the home screen
router.delete("/:id", (req, res) => {
    User.findOneAndRemove({ _id: req.params.id }).then((userData) =>
        res.redirect('/')
    );
});

router.get('/:id', (req, res) => {
    res.render('homePage');
})

router.get('/homePage', (req, res) => {
    res.redirect('homePage');
})

// Add a user to the database, then go to the home screen
router.post("/signUp", (req, res) => {
    User.create(req.body)
        .then(() => res.redirect('/homePage'));
});

// The code below is for songs API and User interaction with the API
// Sign in page; if the email and password match the account in the database, redirect to songs library app

// The "/songsLib" is what I specified in the action in the forn in the ejs file
// The "res.render('songsLibPage');" is where the information will be sent to.
// This code is responsible of capturin searched information in the input box from songsLibPage
router.post("/songsLib", (req, res) => {
    userTitle = req.body
    // console.log(userTitle.title)
    //res.render('songsLibPage', { searchedTitle: userTitle.title });

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${userTitle.title}&key=${process.env.API_KEY}`

    axios.get(url)
    .then((data) => {
        // console.log(data.data.items[0].snippet.thumbnails.default.url)
        res.render('songsLibPage', {searchedTitle: data.data.items});
    })
    
    
});

router.get('/songsLib', (req, res) => {
        res.render('songsLibPage', { songs: userTitle.title });
})



module.exports = router;