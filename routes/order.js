const router = require("express").Router();
const orderController = require("../controllers/order");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controllers/verifyToken");

router.post("/", verifyToken, orderController.insertOrder);

router.put("/:id", verifyTokenAndAuthorization, orderController.updateOrder);

router.delete("/:id", verifyTokenAndAuthorization, orderController.deleteOrder);

router.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  orderController.getOrder
);

router.get("/", verifyTokenAndAuthorization, orderController.getAllOrders);

router.get("/income", verifyTokenAndAdmin, orderController.getIncome);

module.exports = router;
