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
    genre:{
        type: String,
        default: null
    },
    actors: [{
        type: String,
        default: null
    }],
    year: {
        type: Number,
        default: null
    },
    length: {
        type:String,
        default: null
    },
    imgLink: {
        type: String,
        default: null
    },
    sinopsis: {
        type: String,
        default: null
    }
},  {
    timestamps: true
    }
);

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;