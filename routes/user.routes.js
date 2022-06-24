const router = require('express').Router();
const userController = require('../contrellers/UserController');
const isBoss = require('../middlewares/isBoss');
const verifyToken = require('../middlewares/verifyToken');

router.get("/users", verifyToken, isBoss, userController.getAll);
router.delete("/users/:id", verifyToken, isBoss, userController.delete);

module.exports = router;