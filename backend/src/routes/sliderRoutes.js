const express = require("express");
const router = express.Router();
const sliderController = require("../controllers/sliderController");
const productController = require("../controllers/productController");

router.get("/", sliderController.getAllSliders);
router.post("/", productController.uploadImage, sliderController.createSlider);
router.put(
  "/:id",
  productController.uploadImage,
  sliderController.updateSlider
);
router.delete("/:id", sliderController.deleteSlider);

module.exports = router;
