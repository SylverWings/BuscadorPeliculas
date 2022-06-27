const router = require("express").Router();
const orderController = require("../contrellers/OrderController");
const isAdmin = require('../middlewares/isAdmin');
const isBoss = require('../middlewares/isBoss');
const verifyToken = require('../middlewares/verifyToken');

// router.get("/orders", verifyToken, isAdmin, orderController.getAll);
router.get("/orders", verifyToken, isBoss, orderController.getAll);
router.post("/order/create", verifyToken, orderController.create);

module.exports = router;