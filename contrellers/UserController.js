const User = require("../models/User");
const userController = {};

userController.update = async(req, res) =>{
    try{
        const userId = req.user_id;

        const update = {
            name: req.body.name, 
            surname: req.body.surname,
            address: req.body.address,
            city: req.body.city,
            phone: req.body.phone,           
        };
                
        const userUpdated = await User.findOneAndUpdate(userId, update, {new: true});
        
        return res.status(200).json({
            success: true,
            message: "User update success",
            data: userUpdated
        });    
    }catch (error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    }
};

userController.delete = async(req, res)=>{
    try{
        const id = req.user_id;
        const userDeleted = await User.findOneAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Delete user successfully",
            data: userDeleted
            })
    }catch (error){
        return res.status(500).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    }

}

module.exports = userController;