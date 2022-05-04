const patient_ecounter = require('../controller/patient_encounter')
const express = require("express");
const router = express.Router()
router.post("/", patient_ecounter.create);
router.get("/", patient_ecounter.get);
router.patch("/", patient_ecounter.patchD);
router.delete("/", patient_ecounter.deleteDt);

module.exports = router;