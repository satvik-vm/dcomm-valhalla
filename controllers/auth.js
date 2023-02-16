// const login = require("../models/login");
const signup = require("../models/signup");
const account = require("../models/accounts");
const deploy = require("../scripts/deploy");
const ErrResponse = require("../utils/errResponse");
const nodemailer = require("nodemailer");
const qrcode = require("qrcode");
const path = require("path");
const fs = require("fs");

exports.signup_function = async (req, res) => {
    const {_name, phone_number, email, password, pincode, dob} = req.body;
    console.log(req.body);

    const amount = 1;

    const account_number = await deploy(password, amount); //TODO: implement a method to get accunt number from block

    console.log(account_number);

    try{
        const signed_up = await signup.create({
            account_number,
            _name,
            phone_number,
            email,
            password,
            pincode,
            dob
        });
        const main_account = account_number;
        const account_created = await account.create({
            main_account,
        });
        console.log(signed_up);
        console.log(account_created);
        res.status(201).json({
            ok: true,
            signed_up: signed_up,
            message: 'User created'
        });
        createqr(account_number);
        sendMail(account_number, email);
    } catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Cannot create user'
        });
    }
};

exports.login_function = async (req, res, next) => {
    const {account_number, password} = req.body;

    if (!account_number || !password) {
        return next(new ErrResponse("Please provide an email and password", 400));
    }

    try{
        const user = await signup.findOne({account_number: account_number}).select("+password");

        if(!user){
            return next(new ErrResponse("User not found", 401));
        }

        const isMatch = await user.matchPasswords(password);

        if(!isMatch){
            return next(new ErrResponse("Invalid Credentials", 401));
        }

        res.status(201).json({
            ok: true,
            message: 'Signed In'
        });
    }   catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

function createqr (account_number){
    qrcode.toFile(account_number + ".png", account_number);
    console.log("QR code generated");
};

function sendMail(account_number, email) {
    console.log(email);
    const reqpath = path.join(__dirname, "../");
    const qrcode = account_number + ".png";
    var transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: "rahulsharma.1425@outlook.com",
        pass: "RahulSharma",
      },
    });

    var mailOptions = {
      from: "rahulsharma.1425@outlook.com",
      to: email,
      subject: "Your User ID",
      text: "Show the QR code to where ever account number is required.\nYour Account number is " + account_number,
      attachments: [
        {
          path: reqpath + qrcode,
        },
      ],
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        try {
          fs.unlink(reqpath + qrcode, function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log("Deleted qr code");
            }
          });
        } catch (err) {
          console.log(err);
        }
      }
    });
  }