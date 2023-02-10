const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const signupSchema = new mongoose.Schema({
    account_number:{
        type: String,
        required: [true],
        unique: true
    },

    __name: {
        type: String,
        required: [true]
    },

    phone_number: {
        type: Number,
        required: [true],
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        },
    },

    password: {
        type : String,
        required: [true]
    },

    pincode: {
        type: Number,
        required: [true],
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        },
    },

    dob: {
        type: Date,
        required: [true]
    }
});

signupSchema.pre('save', async function (next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

signupSchema.methods.matchPasswords = async function (password){
    return await bcrypt.compare(password, this.password);
};

const signupModel = new mongoose.model("signup", signupSchema);

module.exports = signupModel;