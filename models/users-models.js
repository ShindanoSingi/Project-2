const mongoose = require('../db/connection')

// Structure data in database
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
            required: false
        },
        lastName: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: true
        }
    },

    {

        timestamps: String
    }

);

const User = mongoose.model('user', UserSchema);

module.exports = User;