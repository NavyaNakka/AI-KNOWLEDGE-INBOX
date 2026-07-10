// const express = require("express");
// const router = express.Router();

// const { getAllItems } = require("../controllers/itemController");

// router.get("/", getAllItems);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getChunks,
} = require("../controllers/itemController");

router.get("/", getAllItems);

// Temporary testing route
router.get("/chunks", getChunks);

module.exports = router;