/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      include: ["src/**"],
      reporter: [["cobertura", { file: "coverage.xml" }], "text"],
    },
    reporters: ["default", "junit"],
    outputFile: { junit: "coverage/test-results.xml" },
  },
});
