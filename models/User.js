const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        required: true
    },
    birth:{
        type: Date,
        required: true
    },
    role: {
        type: String,
        enum: ['client', 'boss'],
        default: 'client'
    }    
},  {
    timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User