const patient_ecounter = require("../controller/switch");

const express = require("express");

const router = express.Router();

router.get("/element", patient_ecounter);

module.exports = router;
