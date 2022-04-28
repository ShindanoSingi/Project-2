const mongoose = require('../db/connection')

// Structure data in database
const UserSchema = new mongoose.Schema(
    
    {
        firstName: {
            type: String,
            required: true,
            max: 255,
            min: 2
        },

        middleName: {
            type: String,
            required: false,
            min: 0

        },

        lastName: {
            type: String,
            required: true,
            max: 255,
            min: 2
        },

        email: {
            type: String,
            required: true,
            max: 255,
            min: 6
        },

        password: {
            type: String,
            required: true,
            max: 1024,
            min: 6
        },

        date: {
            type: String,
            default: Date.now
        },

        verified: Boolean,

        status: String,
    },

);

const User = mongoose.model('user', UserSchema);

module.exports = User;