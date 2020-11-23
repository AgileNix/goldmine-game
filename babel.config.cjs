module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  sourceMaps: "both",
  plugins: [ "syntax-async-functions", "@babel/transform-regenerator" ]
};