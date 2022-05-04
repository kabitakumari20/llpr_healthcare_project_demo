const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const validator = require("validator");
const patient_encounter = require("./controller/switch");

mongoose
  .connect("mongodb://localhost:27017/Patients", {
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiesTopology:true
  })
  .then(() => {
    console.log("Patients... connection is successfully");
  })
  .catch((err) => {
    console.log("no connection");
  });

const patientRouter = require("./router/patient");
// const patient_Ecounter = require("./router/patient_ecounter");

// const useraddres = require("./router/userAddress")
// const imgUpload=require("./router/imgUplod")

app.use(express.json());
app.use("/patient", patientRouter);

// app.use("/patient_ecounter", patient_Ecounter);

// app.use("/patient", patientRouter);

// // error
// app.use ('/uploadFile',imgUpload  )

app.listen(2000, (err) => {
  if (err) throw err;

  console.log("Server is running port number 2000--");
});
