const router = require("express").Router();
const movieController = require("../contrellers/MovieController");
const isBoss = require('../middlewares/isBoss');
const verifyToken = require('../middlewares/verifyToken');

router.get("/movies", movieController.getAll);
router.get("/movies/:id", verifyToken, movieController.getById);
router.get("/movies/title/:title", verifyToken, movieController.getByTitle);
router.get("/movies/genre/:genre", verifyToken, movieController.getByGenre);
router.get("/movies/actors/:actors", verifyToken, movieController.getByActors);
router.post("/movies/create", verifyToken, isBoss, movieController.create);
router.delete("/movie/delete/:id", verifyToken, isBoss, movieController.delete);

module.exports = router;