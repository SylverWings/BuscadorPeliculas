const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },    
    rentedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"        
    },
    genre:String,
    actors: [{
        type: String,
        default: null
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    // ageRange: {
    //     type: Number,
    //     required: true
    // },
},  {
    timestamps: true
    }
);

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;