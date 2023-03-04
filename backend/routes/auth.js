// import-
const express = require("express");
const { signUp, signIn, forgetPassword } = require("../controller/auth");
const authRoutes = express.Router();

// router-
authRoutes.post("/signup", signUp);
authRoutes.post("/signin", signIn);
authRoutes.post("/forget-password", forgetPassword);

// export-
module.exports = authRoutes;