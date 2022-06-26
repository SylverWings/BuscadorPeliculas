const Movie = require("../models/Movie");
const movieController = {};

movieController.getAll = async (req, res) => {

    try {
        const userId = req.user_id;
        const movies = await Movie.find({userId}).populate("userId", ["-password"]);

        if(movies.length === 0){
            return res.status(200).json({
                success: true,
                message: "You don't have already movies"
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Get all movies retrivered successfully',
            data: movies
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving movies: ',
            error: error.message
        })
    }
};

movieController.getById = async (req, res) => {

    try {
        const movieId = req.params.id;
        const userId = req.user_id;
        console.log(movieId);
        console.log(userId);
        const movies = await Movie.findOne({_id: movieId, userId: userId})

        return res.status(200).json({
            success: true,
            message: 'Get all movies retrivered successfully',
            data: movies
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving movies: ',
            error: error.message
        })
    }
};

movieController.create = async(req, res) =>{
    try {
        const {title, genre} = req.body;
        const userId = req.user_id;

        if(!title || !genre){
            return res.status(400).json({
                success: false,
                message: "Name and genre are required"
            })
        };
        
        const newMovie = {
            title,                        
            genre,
            actors,
        };

        await Movie.create(newMovie);     

        return res.status(200).json({
            success: true,
            message: "New movie created",
            newMovie: newMovie
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Movie creation failed"
        })
    }
}

movieController.update = async(req, res) => {
    try{
        const filter = {
            _id: req.params.id,
            userId: req.user_id
        };
        
        const update = {
            title: req.body.title, 
            status: req.body.status            
            // genre: req.body.genre,           
        };
        // if(req.body.title === "" || req.body.title == null){
        //     return res.status(400).json({
        //         success: false,
        //         message: "Campo title es obligatorio",                
        //     })
        // }
                    
        const taskUpdated = await Movie.findOneAndUpdate(filter, update, {new: true});   
        if(!taskUpdated){
            return res.status(200).json({
                success: true,
                message: "Movie doesn't exists"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Movie update success",
            data: taskUpdated
        });    
    }catch (error){        
        return res.status(500).json({
            success: false,
            message: "Error detected",
            error: error?.message || error
        })
    }
};

movieController.delete = async(req, res)=>{
    try{
        const filter = {
            _id: req.params._id,
            userId: req.user_id
        };
        
        const taskDeleted = await Movie.findOneAndDelete(filter);

        return res.status(200).json({
            success: true,
            message: "Delete task successfully",
            data: taskDeleted
            })
    }catch (error){
        return res.status(500).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    }

}

module.exports = movieController;