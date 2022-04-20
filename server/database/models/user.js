
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    avatar: String,
    email: {
        type: String,
        required: 'Email is required!',
        lowercase: true,
        index: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    name: {
        type: String,
        minlength: [3, 'Name must be at least 3 characters long'],
    },
    username: {
        type: String,
        required: true,
        minlength: [3, 'Username must be at least 3 characters long'],
    },
    password: {
        type: String,
        minlength: [6, 'Password must be at least 6 characters long'],
        maxlength: [32, 'Password must be maximum 32 characters long'],
        required: true
    },
    role: {
        enum: ['guest', 'admin', 'instructor'],
        type: String,
        required: true,
        default: 'guest',
    },
    info: String,
    createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('User', userSchema);