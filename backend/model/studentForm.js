const mongoose = require("mongoose");

var x = new Date(new Date());
let date = x.toLocaleDateString();

// Schema-
const studentFormSchema = mongoose.Schema({
    studentName: {type: String},
    studentPhoto: {type: String},
    dob: {type: String},
    studentAdhaarCard: {type: String},
    studentClass: {type: String},
    fatherName: {type: String},
    motherName: {type: String},
    parentPhoto: {type: String},
    parentAdhaarCard: {type: String},
    parentOccupation: {type: String},
    mobileNumber1: {type: String},
    mobileNumber2: {type: String},
    address: {type: String},
    createdAt: {
        type: String,
        default: date
    }
})

// Model-
const StudentFormModel = mongoose.model("student", studentFormSchema);

module.exports = StudentFormModel;