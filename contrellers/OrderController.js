const Order = require('../models/Order');


const orderController = {};

orderController.create = async(req, res) =>{
    try {
        const {title} = req.body;
        
        if(!title){
            return res.status(400).json({
                success: false,
                message: "Movie are required"
            })
        }else if(await Order.findOne({userId: req.user_id})){
            return res.status(400).json({
                success: false,
                message: "The client has already rented a movie"
            })
        }else if(await Order.findOne({title: title}).rentalDate.valueOf() < new Date().valueOf()){

                return res.status(400).json({
                    success: false,
                    message: "The movie its already rented to other user"
                })
        };
        
        const newOrder = {
            userId: req.user_id,
            title: title,                              
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

orderController.getById = async (req, res) => {
    
    try {

        const id = req.params.id;
                
        const orders = await Order.findOne({id: id})

        return res.status(200).json({
            success: true,
            message: 'Order retrivered successfully',
            data: orders
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving order',
            error: error.message
        })        
    }
};

orderController.delete = async(req, res)=>{
    try{
        const filter = {
            _id: req.body._id,
            userId: req.user_id
        };
        
        const orderDeleted = await Order.findOneAndDelete(filter);

        return res.status(200).json({
            success: true,
            message: "Delete order successfully",
            data: orderDeleted
            })
    }catch (error){
        return res.status(500).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    }

}

module.exports = orderController;