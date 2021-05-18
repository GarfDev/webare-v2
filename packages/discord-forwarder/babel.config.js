module.exports = {
  extends: "../../babel.config.js",
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx",
        ],
        root: ["./app"],
      },
    ],
  ],
};
