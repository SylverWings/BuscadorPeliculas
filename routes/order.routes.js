const router = require("express").Router();
const orderController = require("../contrellers/OrderController");
const isBoss = require('../middlewares/isBoss');
const verifyToken = require('../middlewares/verifyToken');

router.get("/orders", verifyToken, isBoss, orderController.getAll);
router.post("/order/create", verifyToken, orderController.create);

module.exports = router;