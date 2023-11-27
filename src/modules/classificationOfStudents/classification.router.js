const express = require("express");
const router = express.Router();
const { classifyStudents } = require("./controller/classification");
router.get("/classify", classifyStudents);

module.exports = router;
