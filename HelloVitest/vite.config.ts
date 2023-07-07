/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: [["cobertura", { file: "coverage.xml" }], "text"],
    },
  },
});
