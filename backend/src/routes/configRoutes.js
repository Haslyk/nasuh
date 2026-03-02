const express = require("express");
const router = express.Router();
const configController = require("../controllers/configController");

router.get("/", configController.getSettings);
router.put("/", configController.updateSettings); // Admin yetkisi eklenecek

module.exports = router;
