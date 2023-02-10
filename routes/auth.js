const express = require("express");
const router = express.Router();

const {signup_function, login_function} = require("../controllers/auth");

router.route("/signup_function").post(signup_function);

router.route("/login_function").post(login_function);

module.exports = router;