/**
 * Babel config for running Jest tests
 */

module.exports = {
  plugins: [
    [
      require.resolve("babel-plugin-formatjs"),
      {
        idInterpolationPattern: "[sha512:contenthash:base64:6]",
        removeDefaultMessage: false,
      },
    ],
  ],
};
