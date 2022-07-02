const Movie = require("../models/Movie");
const movieController = {};

movieController.getAll = async (req, res) => {

    try {
        const userId = req.user_id;
        const movies = await Movie.find();

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

movieController.getByTitle = async (req, res) => {

    try {
        const movieTitle = req.params.title;
        const movies = await Movie.findOne({title: movieTitle});
        
        if(movies.length === 0){
            return res.status(200).json({
                success: true,
                message: "The movie youre looking for doesn't exist"
            })
        }

        return res.status(200).json({
            success: true,
            message: 'The movie has been found',
            data: movies
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving the movie: ',
            error: error.message
        })
    }
};

movieController.getByGenre = async (req, res) => {

    try {
        const movieGenre = req.params.genre;
        const movies = await Movie.find({movieGenre});

        if(movies.length === 0){
            return res.status(200).json({
                success: true,
                message: "There aren't movies with this Genre"
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Here are the list of the genre movies',
            data: movies
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving the movies by genre: ',
            error: error.message
        })
    }
};

movieController.getByActors = async (req, res) => {

    try {
        const actors = req.params.actors;
        const movies = await Movie.actors.filter({actors});

        if(movies.length === 0){
            return res.status(200).json({
                success: true,
                message: "There aren't movies with this actor"
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Here are the movies with this actor',
            data: movies
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Error retriving the movies with: ${actors}` ,
            error: error.message
        })
    }
};

movieController.getById = async (req, res) => {

    try {
        const movieId = req.params.id;
        const userId = req.user_id;
        
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
        const {title, genre, actors} = req.body;
        
        
        if(!title || !genre){
            return res.status(400).json({
                success: false,
                message: "Name and genre are required"
            })
        };
        
        
        const newMovie = {
            title,                        
            genre,
            actors            
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
};

movieController.delete = async(req, res)=>{
    try{
        const filter = {
            _id: req.params._id,
            userId: req.user_id
        };
        
        const movieDeleted = await Movie.findOneAndDelete(filter);

        return res.status(200).json({
            success: true,
            message: "Delete movie successfully",
            data: movieDeleted
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