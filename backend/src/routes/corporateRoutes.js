const express = require("express");
const router = express.Router();
const corporateController = require("../controllers/corporateController");

router.get("/:slug", corporateController.getPage);
router.put("/:slug", corporateController.updatePage);

module.exports = router;
