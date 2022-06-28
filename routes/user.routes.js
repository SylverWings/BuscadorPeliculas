const router = require('express').Router();
const profileController = require("../contrellers/ProfileController");
const userController = require('../contrellers/UserController');
const verifyToken = require('../middlewares/verifyToken');
const isBoss = require('../middlewares/isBoss');


router.get("./profile/users", verifyToken, isBoss, profileController.getAll);
router.post("/profile/register", profileController.register);
router.post("/profile/login", profileController.login);
router.delete("/deleteUser", verifyToken, userController.delete);

module.exports = router;