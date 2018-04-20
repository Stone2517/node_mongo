const mongoose = require('mongoose');

const User = mongoose.model('Todo', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    password: {
        type: Number,
        required: true,
        minlength: 6,
        trim: true
    }
});

module.exports = {User};