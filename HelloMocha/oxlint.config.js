import { defineConfig } from "oxlint";

export default defineConfig({
  options: {
    typeAware: true,
  },

  // 1. Declare the JavaScript plugin bridge
  jsPlugins: [
    {
      name: "eslint-ts",
      specifier: "oxlint-plugin-eslint",
    },
  ],

  // 2. Define your advanced rule configurations
  rules: {
    // Prefix the rule with your JS plugin name to hand off processing
    "eslint-ts/@typescript-eslint/no-floating-promises": [
      "error",
      {
        allowForKnownSafeCalls: [
          {
            from: "package",
            name: ["suite", "test"],
            package: "node:test",
          },
        ],
      },
    ],
  },
});
