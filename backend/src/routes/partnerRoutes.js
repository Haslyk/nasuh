const express = require("express");
const router = express.Router();
const partnerController = require("../controllers/partnerController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.get("/", partnerController.getAllPartners);
router.post("/", upload.single("image"), partnerController.createPartner);
router.delete("/:id", partnerController.deletePartner);

module.exports = router;
