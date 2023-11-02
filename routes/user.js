const router = require("express").Router();
const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controllers/verifyToken");
const userController = require("../controllers/user");

router.put("/:id", verifyTokenAndAuthorization, userController.updateUser);

router.delete("/:id", verifyTokenAndAuthorization, userController.deleteUser);

router.get("/find/:id", verifyTokenAndAdmin, userController.getUser);

router.get("/", verifyTokenAndAdmin, userController.getAllUsers);

router.get("/stats", verifyTokenAndAdmin, userController.getStats);

module.exports = router;
