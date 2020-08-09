module.exports = {
  networks: {},

  compilers: {
    solc: {
      version: '0.6.10',
      settings: {
        optimizer: {
          enabled: true,
          runs: 99999,
        },
        evmVersion: 'istanbul',
      },
    },
  },
};
