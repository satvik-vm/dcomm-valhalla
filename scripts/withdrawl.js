const { ethers } = require("hardhat");

exports.main = async (account_number, amount) => {
    const Acc = await ethers.getContractFactory("account");

    const acc = await Acc.attach(account_number);

    const mss = acc.withdraw(parseInt(amount));

    return mss;
}