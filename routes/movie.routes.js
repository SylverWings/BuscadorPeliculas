const router = require("express").Router();
const movieController = require("../contrellers/MovieController");
const isBoss = require('../middlewares/isBoss');
const verifyToken = require('../middlewares/verifyToken');

router.get("/movie", verifyToken, movieController.getAll);
router.get("/movie/:id", verifyToken, movieController.getById);
router.get("/movie/title/:title", verifyToken, movieController.getByTitle);
router.get("/movie/genre/:genre", verifyToken, movieController.getByGenre);
router.get("/movie/actors/:actors", verifyToken, movieController.getByActors);
router.post("/movie", verifyToken, isBoss, movieController.create);
router.delete("/movie/:id", verifyToken, isBoss, movieController.delete);

module.exports = router;