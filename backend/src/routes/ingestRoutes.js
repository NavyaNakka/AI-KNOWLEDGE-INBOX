const express = require("express");
const router = express.Router();
const { ingestContent } = require("../controllers/ingestController");

router.post("/", ingestContent);

module.exports = router;