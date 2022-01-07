// https://eth-ropsten.alchemyapi.io/v2/GCLWafD2OH4OAOMcuPKQVh88I_ZFiub7

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/GCLWafD2OH4OAOMcuPKQVh88I_ZFiub7",
      accounts: [
        "ef70efdbdabaaf93f8b3fbb26acac4500597dc5f5415b8416ff1264936ecac75",
      ],
    },
  },
};
