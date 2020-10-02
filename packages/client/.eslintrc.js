module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb-typescript",
    "airbnb/hooks"
  ],
  parserOptions: {
    debugLevel: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    "react/button-has-type": 0
  }
};
