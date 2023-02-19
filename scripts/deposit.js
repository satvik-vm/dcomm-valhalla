const { ethers } = require("hardhat")
const getBalance = require("./getBalance");

exports.main = async (account_number, amount) => {
    console.log("Amount to be deposited: " + amount);
    const Acc = await ethers.getContractFactory("account");

    const acc = await Acc.attach(account_number);

    var mss = await acc.deposit(parseInt(amount));

    const balance_1 = parseInt((await acc.getBalance()).toString());
    console.log("balance_1: ", balance_1);
    const balance_2 = getBalance.main(account_number);
    console.log("balance_2: ", balance_2);
    mss["balance"] = balance_1;

    console.log(mss);

    return mss;
}