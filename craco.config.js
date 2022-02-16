module.exports = function ({ env }) {
  const config = {
    babel: {
      env: {
        test: {
          plugins: [
            [
              require.resolve("babel-plugin-formatjs"),
              {
                idInterpolationPattern: "[sha512:contenthash:base64:6]",
                removeDefaultMessage: false,
              },
            ],
          ],
        },
      },
      plugins: [
        [
          require.resolve("babel-plugin-formatjs"),
          {
            idInterpolationPattern: "[sha512:contenthash:base64:6]",
          },
        ],
      ],
    },
  };
  return config;
};
