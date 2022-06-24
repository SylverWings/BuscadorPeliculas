const router = require("express").Router();
const movieController = require("../contrellers/MovieController");
const isBoss = require('../middlewares/isBoss');
const verifyToken = require('../middlewares/verifyToken');

router.get("/movie", verifyToken, movieController.getAll);
router.get("/movie/:title", verifyToken, movieController.getByTitle);
router.get("/movie/:id", verifyToken, movieController.getById);
router.post("/movie/:id", verifyToken, isBoss, movieController.create);
router.delete("/movie/:id", verifyToken, isBoss, movieController.delete);

module.exports = router;