const router = require("express").Router();
const movieController = require("../contrellers/MovieController");
const isAdmin =require("../middlewares/isAdmin")
const isBoss = require('../middlewares/isBoss');
const verifyToken = require('../middlewares/verifyToken');

router.get("/movie", verifyToken, isBoss, movieController.getAll);
router.get("/movie", verifyToken, isAdmin, movieController.getAll)
// router.get("/movie/:title", verifyToken, movieController.getByTitle);
router.get("/movie/:id", verifyToken, isBoss, movieController.getById);
router.get("/movie/:id", verifyToken, isAdmin, movieController.getAll)
router.post("/movie", verifyToken, isBoss, movieController.create);
router.delete("/movie/:id", verifyToken, isBoss, movieController.delete);

module.exports = router;