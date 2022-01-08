// https://eth-ropsten.alchemyapi.io/v2/GCLWafD2OH4OAOMcuPKQVh88I_ZFiub7

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const MY_ROPSTEN_URL = process.env.MY_ROPSTEN_URL;
const MY_METAMASK_PRIVATE_KEY = process.env.MY_METAMASK_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: MY_ROPSTEN_URL,
      accounts: [MY_METAMASK_PRIVATE_KEY],
    },
  },
};
