const AccessoriesModel = require("../model/accessories");

// get all students-
const getAllAccessories = async(req, res)=>{
    try
    {
        const allAccessories = await AccessoriesModel.find();
        console.log("All Accessories");
        res.json(allAccessories);
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's somthing went wrong"})
    }
}


// submit form for accessories-
const takeAccessoriesDetails = async(req, res)=>{
    const payload = req.body;
    try
    {
        const data = new AccessoriesModel(payload);
        data.save();
        console.log("Accessories saved");
        return (res.status(201).json({message: "Accessories saved"}));
    }
    catch(error)
    {
        console.error(err);
        return res.status(401).json({error: "Accessories not saved"});
    }
}


// update addmission details-
const updateAccessoryDetails = async(req, res)=>{
    const payload = req.body;
    const {_id} = req.params;

    try
    {
        await AccessoriesModel.findByIdAndUpdate({_id}, payload)
        console.log("Successfully updated");
        return res.json({message: "Successfully updated"})
    }
    catch(error)
    {
        console.log(error);
        return res.json({error: "OOP's data not updated"})
    }
}


// delete addmission details-
const deleteAccessoryDetails = async(req, res)=>{
    const {_id} = req.params;
    try
    {
        await AccessoriesModel.findByIdAndDelete({_id})
        console.log("Successfully deleted");
        return res.json({message: "Successfully deleted"});
    }
    catch(error)
    {
        console.log(error);
        return res.json({error: "OOP's data not deleted"})
    }
}


module.exports = {getAllAccessories, takeAccessoriesDetails, updateAccessoryDetails, deleteAccessoryDetails}