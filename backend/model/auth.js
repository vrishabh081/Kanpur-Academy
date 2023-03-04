const mongoose = require("mongoose");

// schema-
const registerSchema = mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    password : String,
})

// model-
const RegisterModel = mongoose.model("user", registerSchema);

// export-
module.exports = RegisterModel;