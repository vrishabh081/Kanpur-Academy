const mongoose = require("mongoose");

var x = new Date(new Date());
let date = x.toLocaleDateString();

// Schema-
const accessoriesSchema = mongoose.Schema({
    accessoriesName: {type: String},
    accessoriesPhoto: {type: String},
    accessoriesPrice: {type: String},
    accessoriesAbout: {type: String},
    createdAt: {
        type: String,
        default: date
    }
})

// Model-
const AccessoriesModel = mongoose.model("accessorie", accessoriesSchema);

module.exports = AccessoriesModel;