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
    genre:[{
        type: String,
        require: false
    }],
    actors: [{
        type: String,
        require: false
    }],
    year: {
        type: Number,
        require: false
    },
    length: {
        type:String,
        require: false
    },
    imgLink: {
        type: String,
        require: false
    },
    sinopsis: {
        type: String,
        require: false
    }
},  {
    timestamps: true
    }
);

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;