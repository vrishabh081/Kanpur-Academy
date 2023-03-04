const express = require("express");
const { getAllAccessories, takeAccessoriesDetails, updateAccessoryDetails, deleteAccessoryDetails } = require("../controller/accessories");
const accessoriesRoutes = express.Router();

// routes-
accessoriesRoutes.get("/", getAllAccessories);
accessoriesRoutes.post("/addaccessory", takeAccessoriesDetails);
accessoriesRoutes.patch("/updateaccessory/:_id", updateAccessoryDetails);
accessoriesRoutes.delete("/deleteaccessory/:_id", deleteAccessoryDetails)

module.exports = accessoriesRoutes;