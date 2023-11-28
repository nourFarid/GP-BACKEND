const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth.js");
const inquiry = require("./controller/InquiryAboutAdmission.js");

router.put("/request/:NationalId", inquiry.addResult);

// router.put('/updateResult/:NationalId'
// //, auth.auth([auth.roles.admin])
// ,inquiry.updateResult)

router.get("/result/:NationalId", inquiry.getResultOfInquiry);

module.exports = router;
