const router = require("express").Router();
const orderController = require("../contrellers/OrderController");
const isBoss = require('../middlewares/isBoss');
const verifyToken = require('../middlewares/verifyToken');

router.get("/orders", verifyToken, isBoss, orderController.getAll);
router.get("/orders/:id", verifyToken, isBoss, orderController.getById);
router.post("/orders/create", verifyToken, orderController.create);
router.delete("/order/delete", verifyToken, orderController.delete);

module.exports = router;