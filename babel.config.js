module.exports = {
  plugins: ["@babel/plugin-transform-runtime"],
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        bugfixes: true,
        targets: { node: "current" },
        modules: "commonjs",
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
