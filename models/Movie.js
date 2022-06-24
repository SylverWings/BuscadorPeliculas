const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({

    Title: {
        type: String,
        require: true
    },    
    rentedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    genre:String,
    actors: [{type: String}]
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