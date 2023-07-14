require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const {projectId,mnemonic1,ALCHEMY_API_KEY,ETHERSCAN_API_KEY} = process.env;
module.exports = {
  networks: {
    // npx hardhat run scripts/deploy.js --network eth_testnet
    // 领水地址 : https://goerlifaucet.com/
    goerli: {
      url: `https://goerli.infura.io/v3/${projectId}`,
      accounts: {
        mnemonic: mnemonic1,
      },
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${projectId}`,
      accounts: {
        mnemonic: mnemonic1,
      },
    },
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        blockNumber: 17342219,
      },
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      goerli: ETHERSCAN_API_KEY,
    },
  },
  solidity: {
    // 可修改编译器版本
    compilers: [
      {
        version: "0.8.18",
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.8.7",
      },
      {
        version: "0.5.16",
      },
    ],
  },
};
