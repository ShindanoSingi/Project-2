require('dotenv').config()
const Users = require("../models/users-models");
const seedData = require("./users.json");

Users.deleteMany({})
    .then(() => {
        return Users.insertMany(seedData);
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
        process.exit();
    });