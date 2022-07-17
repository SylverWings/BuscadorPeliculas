const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const profileController = {};

profileController.register = async (req, res) => {
    try {
        const {name, surname, email, password, phone} = req.body;

        if(!name || !email || !password || !surname || !phone){
            return res.status(400).json({
                success: false,
                message: "Name, surname, email, password and phone are required"
            })
        };        
        const salt = bcrypt.genSaltSync(10);
        const encryptPassword = await bcrypt.hash(password, salt);
        
        const newUser = {
            name, 
            surname,
            email, 
            password: encryptPassword,
            phone
        };

        await User.create(newUser);

        return res.status(200).json({
            success: true,
            massage: 'Create user successfully'
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Error creating users: ',
            error: error?.message || error
        })
    }
};

profileController.login = async(req, res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            })
        };
        
        const user = await User.findOne({email: email});
        
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Bad Credentials"
            })
        };
        
        const isValidPassword = bcrypt.compareSync(password, user.password);
        
        if(!isValidPassword){
            return res.status(401).json({
                success: false,
                message: "Bad Credentials"
            })
        };
                
        const token = jwt.sign({user_id: user._id, user_role: user.role}, process.env.JWT_SECRET, {expiresIn: "5h"})

        return res.status(200).json({
            success: true,
            message: "User logged",
            token: token
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "User can't login"
        })
    }
};

profileController.getUser = async(req, res) =>{
    try {
        const userId = req.user_id;
        const id = req.body._id
        const findUser = await User.findOne({id: userId, id: _id}).select(['-_id','-password']);

        return res.status(200).json({
            success: true,
            message: "Profile finded",
            data: findUser
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Profile can't login"
        })
    }
}

module.exports = profileController;