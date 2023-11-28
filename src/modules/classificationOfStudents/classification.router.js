const express = require("express");
const router = express.Router();
const { classifyOldStudents } = require("./controller/classificationOfOld");
const { classifyNewStudents } = require("./controller/classificationOfNew");
router.get("/classifyOld", classifyOldStudents);
router.get("/classifyNew", classifyNewStudents);

module.exports = router;
