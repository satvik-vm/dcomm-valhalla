const express = require("express");
const router = express.Router();

const {signup_function, login_function, deposit_function, withdrawl_function, get_balance_function} = require("../controllers/auth");

router.route("/signup_function").post(signup_function);

router.route("/login_function").post(login_function);

router.route("/deposit_function").post(deposit_function);

router.route("/withdrawl_function").post(withdrawl_function);

router.route("/get_balance_function").post(get_balance_function);

module.exports = router;