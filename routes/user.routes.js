const router = require('express').Router();
const profileController = require("../contrellers/ProfileController");
const userController = require('../contrellers/UserController');
const verifyToken = require('../middlewares/verifyToken');
const isBoss = require('../middlewares/isBoss');


router.post("/register", profileController.register);
router.post("/login", profileController.login);
router.get("/users/profile", verifyToken, profileController.getUser);
router.get("/users/allProfile", verifyToken, isBoss, profileController.getAllUser);
router.put("/users/update", verifyToken, userController.update);
router.delete("/deleteUser", verifyToken, userController.delete);

module.exports = router;