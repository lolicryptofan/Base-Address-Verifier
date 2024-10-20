module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    base: {
      provider: () => new HDWalletProvider(
        "YOUR_PRIVATE_KEY",  // Replace with your wallet private key for Base
        "https://base-testnet.rpc-url.com" // Replace with Base Testnet RPC URL
      ),
      network_id: 84531,     // Base Testnet network ID
      gas: 4500000,          // Gas limit
      gasPrice: 10000000000  // 10 gwei
    }
  },

  compilers: {
    solc: {
      version: "0.8.0",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
