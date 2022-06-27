const Order = require('../models/Order');


const orderController = {};

orderController.create = async(req, res) =>{
    try {
        const {movieTitle} = req.body;
        const userId = req.user_id;

        if(!movie){
            return res.status(400).json({
                success: false,
                message: "Movie are required"
            })
        };
        
        const newOrder = {
            userId,
            movieTitle                       
        };

        await Order.create(newOrder);     

        return res.status(200).json({
            success: true,
            message: "New order created",
            newOrder: newOrder
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Order creation failed"
        })
    }
};

orderController.getAll = async (req, res) => {

    try {
        const orders = await Order.find();

        if(orders.length === 0){
            return res.status(200).json({
                success: true,
                message: "You don't have already orders"
            })
        };

        return res.status(200).json({
            success: true,
            message: 'Get all orders retrivered successfully',
            data: orders
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving orders: ',
            error: error.message
        })
    }
};


module.exports = orderController;