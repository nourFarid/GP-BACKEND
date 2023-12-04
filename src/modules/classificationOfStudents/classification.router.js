const express = require("express");
const router = express.Router();
const { classifyExpStudents } = require("./controller/classificationOfExp");
const { classifyEgyStudents } = require("./controller/classificationOfEgy");
router.get("/classifyExp", classifyExpStudents);
router.get("/classifyEgy", classifyEgyStudents);

module.exports = router;
