const router = require('express').Router();
const profileController = require("../contrellers/ProfileController");
const userController = require('../contrellers/UserController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require("../middlewares/isAdmin")
const isBoss = require('../middlewares/isBoss');


router.get("./profile/profile", verifyToken, isAdmin, profileController.getAll);
router.get("./profile/profile", verifyToken, isBoss, profileController.getAll);
router.post("/profile/register", profileController.register);
router.post("/profile/login", profileController.login);
router.delete("/users/:id", verifyToken, userController.delete);

module.exports = router;