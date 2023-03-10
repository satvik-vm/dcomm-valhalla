require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.17",
   defaultNetwork: "Dcomm_goldcoast",
   networks: {
      hardhat: {},
      Dcomm_goldcoast: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}

