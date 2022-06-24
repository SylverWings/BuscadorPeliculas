const authController = require("../contrellers/AuthController");
const router = require("express").Router();
const isBoss = require('../middlewares/isBoss');
const verifyToken = require('../middlewares/verifyToken');

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.get("./auth/profile", verifyToken, isBoss, authController.profile);

module.exports = router;