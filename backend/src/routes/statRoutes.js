const express = require("express");
const router = express.Router();
const statController = require("../controllers/statController");

router.get("/", statController.getAllStats);
router.post("/", statController.createStat);
router.put("/:id", statController.updateStat);
router.delete("/:id", statController.deleteStat);

module.exports = router;
