module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser"
  },
  globals: {
    AMap: true
  },
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/ban-ts-comment": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
    "vue/multi-word-component-names": 0,
    "linebreak-style": ["off"],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "@typescript-eslint/no-empty-function": ["off"]
  }
};
