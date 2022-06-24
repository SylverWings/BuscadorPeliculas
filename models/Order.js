const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },    
    movieTitle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    },
    rentalDate: String,
    returnDate: String,
    //city:[{type: String}]
},  {
    timestamps: true
    }
);

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;