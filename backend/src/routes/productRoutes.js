const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.get("/detail/:slug", productController.getProductBySlug);
router.post(
  "/",
  productController.uploadImage,
  productController.createProduct
);
router.put(
  "/:id",
  productController.uploadImage,
  productController.updateProduct
);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
