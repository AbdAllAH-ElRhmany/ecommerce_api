const router = require("express").Router();
const productController = require("../controllers/product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controllers/verifyToken");

router.post("/", verifyTokenAndAdmin, productController.insertProduct);

router.put("/:id", verifyTokenAndAdmin, productController.updateProduct);

router.delete("/:id", verifyTokenAndAdmin, productController.deleteProduct);

router.get("/find/:id", productController.getProduct);

router.get("/", productController.getAllProducts);

// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear() - 1);
//   try {
//     const data = await User.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     // const users = await User.find();

//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
