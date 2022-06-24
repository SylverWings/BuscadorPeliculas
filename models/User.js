const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
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
        required: true,
        // minLength: 6,
        // maxLength: 10
    },
    // age: {
    //     type: Number,
    //     required: true,
    //     default: 18
    // },
    role: {
        type: String,
        enum: ['user', 'admin', 'boss'],
        default: 'user'
    }    
},  {
    timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User