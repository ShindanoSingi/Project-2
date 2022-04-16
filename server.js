require('dotenv').config()
const express = require("express");
const methodOverride = require('method-override');
const usersController = require("./controllers/usersController");

const app = express();

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});



app.use(express.static(__dirname + '/' + 'public'));
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.use(usersController);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("The app is running on port " + PORT);
});