const express = require("express");
const User = require("../models/users-models");

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


// Add a user to the database, then go to the home screen
router.post("/signUp", (req, res) => {
    User.create(req.body)
        .then(() => res.redirect('/homePage'));
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





module.exports = router;