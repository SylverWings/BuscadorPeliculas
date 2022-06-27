const mongoose = require("mongoose");
let newDate = new Date();
const OrderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"        
    },    
    title: {
        type: String,
        required: true
    },
    rentalDate: {
        type: Date,
        default: new Date()
    },
    returnDate: {
        type: Date,
        default: newDate.setDate(newDate.getDate() + 7)
    },
    returnLimit: {
        type: Boolean,
    }
},  {
    timestamps: true
    }
);

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;