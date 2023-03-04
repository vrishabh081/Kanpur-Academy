const StudentFormModel = require("../model/studentForm");

// get all students-
const getAllStudents = async(req, res)=>{
    try
    {
        let query = {};
        if(req.query.keyword)
        {
            query.$or = [
                {"studentClass": {$regex: req.query.keyword, $options: "i"}},
                {"studentName": {$regex: req.query.keyword, $options: "i"}}
            ]
        }

        const allStudents = await StudentFormModel.find(query)
        console.log("All students");
        console.log(req.query);
        return res.json(allStudents);
    }
    catch(error)
    {
        console.log(error);
        return res.json({error: "OOP's somthing went wrong"})
    }
}

// get single form student-
const getSingleStudents = async(req, res)=>{
    const {_id} = req.params;
    try
    {
        const singleStudent = await StudentFormModel.find({_id});
        console.log("Single Student");
        res.json(singleStudent);
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's somthing went wrong"})
    }
}


// submit form and take addmission-
const takeAddmissionDetails = (req, res)=>{
    const payload = req.body;
    const {
        studentName,
        dob, 
        studentClass,
        studentPhoto
    } = req.body;

    if(!studentName || !dob || !studentClass)
    {
        return res.status(422).json({error: "Please fill all details"});   
    }
    
    // check if student's details are already in database-
    StudentFormModel.findOne({$and: [{studentPhoto}]})
    .then((existingStudent)=>{
        if(existingStudent)
        {
            return (res.status(401).json({error: "This student has already taken addmission"}))
        }
        else
        {
            const data = new StudentFormModel(payload);
            data.save();
            console.log("Student details saved");
            return (res.status(201).json({message: "Student details saved"}));
        }
    })
    .catch(err=>{
        console.error(err);
        res.status(401).json({error: "Student details not saved"});
    })
}


// update addmission details-
const updateAddmissionDetails = async(req, res)=>{
    const {
        studentNameEdit,
        studentPhotoEdit,
        dobEdit,
        studentAdhaarCardEdit,
        studentClassEdit,
        fatherNameEdit,
        motherNameEdit,
        parentAdhaarCardEdit,
        parentOccupationEdit,
        mobileNumber1Edit,
        mobileNumber2Edit,
        addressEdit
    } = req.body;

    const {_id} = req.params;
    try
    {
        await StudentFormModel.findByIdAndUpdate({_id}, {
            studentName: studentNameEdit,
            studentPhoto: studentPhotoEdit,
            dob: dobEdit,
            studentAdhaarCard: studentAdhaarCardEdit,
            studentClass: studentClassEdit,
            fatherName: fatherNameEdit,
            motherName: motherNameEdit,
            parentAdhaarCard: parentAdhaarCardEdit,
            parentOccupation: parentOccupationEdit,
            mobileNumber1: mobileNumber1Edit,
            mobileNumber2: mobileNumber2Edit,
            address: addressEdit
        })
        console.log("Successfully updated");
        res.json({message: "Successfully updated"})
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's data not updated"})
    }
}


// delete addmission details-
const deleteAddmissionDetails = async(req, res)=>{
    const {_id} = req.params;
    try
    {
        await StudentFormModel.findByIdAndDelete({_id})
        console.log("Successfully deleted");
        res.json({message: "Successfully deleted"})
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's data not deleted"})
    }
}
module.exports = {getAllStudents, getSingleStudents, takeAddmissionDetails, updateAddmissionDetails, deleteAddmissionDetails}