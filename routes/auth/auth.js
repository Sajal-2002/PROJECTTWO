const express = require("express");

const router = express.Router();

const login = require("./login");
const verify = require("./verify");


router.use("/google",login);
router.use("/verifyemail",verify);


module.exports = router;
