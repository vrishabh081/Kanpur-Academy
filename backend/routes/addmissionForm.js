const express = require("express");
const { getAllStudents, getSingleStudents, takeAddmissionDetails, updateAddmissionDetails, deleteAddmissionDetails } = require("../controller/addmissionForm");
const studentRoutes = express.Router();

// routes-
studentRoutes.get("/", getAllStudents)
studentRoutes.get("/:_id", getSingleStudents);
studentRoutes.post("/addstudent", takeAddmissionDetails);
studentRoutes.patch("/updatestudent/:_id", updateAddmissionDetails);
studentRoutes.delete("/deletestudent/:_id", deleteAddmissionDetails)

module.exports = studentRoutes;