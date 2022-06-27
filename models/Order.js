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
    rentalDate: {
        type: date,
        default: new Date()
    },
    returnDate: {
        type: date,
        default: rentalDate.getMonth() + 1
    },
},  {
    timestamps: true
    }
);

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;