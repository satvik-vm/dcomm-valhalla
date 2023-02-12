// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main(password, amount) {
  var amount = 10;

  const account = await hre.ethers.getContractFactory("account");
  const acc = await account.deploy(password, amount, {value: 0});

  await acc.deployed();

  console.log(
    "Account created successfully with initail balance " + amount + " and deployed to " + acc.address
  );

  return acc.address;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

module.exports = main;
