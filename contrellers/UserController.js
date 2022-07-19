const User = require("../models/User");
const userController = {};

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