const router = require("express").Router();

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controllers/verifyToken");
const cartController = require("../controllers/cart");

router.post("/", verifyToken, cartController.insertCart);

router.put("/:id", verifyTokenAndAuthorization, cartController.updateCart);

router.delete("/:id", verifyTokenAndAuthorization, cartController.deleteCart);

router.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  cartController.getCart
);

router.get("/", verifyTokenAndAuthorization, cartController.getAllCarts);

module.exports = router;
