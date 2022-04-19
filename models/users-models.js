const mongoose = require('../db/connection')

// Structure data in database
const UserSchema = new mongoose.Schema({
        firstName: String,
        middleName: String,
        lastName: String,
        gender: String,
        email: String,
        password: String,
        status: String
        }, 
        {

        timestamps: Date
    }

);

const User = mongoose.model('user', UserSchema);

module.exports = User;