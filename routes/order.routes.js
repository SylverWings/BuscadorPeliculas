const router = require("express").Router();
const orderController = require("../contrellers/OrderController");
const isAdmin = require('../middlewares/isAdmin');
const isBoss = require('../middlewares/isBoss');
const verifyToken = require('../middlewares/verifyToken');

router.get("/orders", isBoss || isAdmin, verifyToken, orderController.getAll);
router.get("/order/create", verifyToken, orderController.getByTitle);

module.exports = router;