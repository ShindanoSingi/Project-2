const express = require("express");
const res = require("express/lib/response");
const User = require("../models/users-models");

// Define a router
const router = express.Router();

// Render all data form database to the browser "index"
router.get("/", (req, res) => {
    User.find({})
        .then((userData) => res.send(userData));
});

// Add a user to the database, then go to the home screen
router.post("/add", (req, res) => {
    User.create(req.body)
        .then(() => res.redirect('/'));
});

// Delete a user from database, then go to the home screen
router.delete("/:id", (req, res) => {
    User.findOneAndRemove({ _id: req.params.id }).then((userData) =>
        res.redirect('/')
    );
});

// Update a user in the database, then go to the home screen
router.put("/:id", (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body).then(
        (userData) => res.redirect('/')
    );
});

// Find a user in the database by id in the edit screen/window
router.get('/new', (req, res) => {
    User.findById(req.params.id).then(userData => {
        res.render('edit', userData)
    })
    res.render('new');
})


router.get('/:id', (req, res) => {
    res.render('new');
})



module.exports = router;