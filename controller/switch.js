const mask = require("../helper/mask")

const replaceField = require("../helper/replaceField")
const patients = require("../models/patient");
const patient_json_data = require("../uplods/patient.json");

const patient_encounter = require("../models/patient_encounters");
const patient_encounter_json_data = require("../uplods/encounter.json");


const patient_ecounter = async (req, res) => {


  let eventNames = req.body.event;

  switch (eventNames) {
    case "patients":
      // const replaceData = replaceField(patient_json_data ) //"patient_id", "src_pt_id");
      // console.log(replaceData, "----------------------------------")
      // const maskData = mask(replaceData, ["first_Name" , "last_Name"])

      // console.log(maskData, "=====================================")

      // const jsonData = assignFeild (maskData)
      // console.log(jsonData, "))))))))))))))))))))))))))))))")
      
      const patient_data = await patients.create(patient_json_data);
      console.log(patient_data)
      return res.status(200).send(patient_data);
      // break;

      
    case "patient_encounter":
      const patient_encounter_data = await patient_encounter.create(patient_encounter_json_data);
      console.log(patient_encounter_data)
      return res.status(200).send(patient_encounter_data);
      // break;
  }
};

module.exports = patient_ecounter;
