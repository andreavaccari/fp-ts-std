module.exports = {
  preset: "ts-jest",
  testRegex: "/test/",
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*"],
  coveragePathIgnorePatterns: ["index.ts"],
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
      diagnostics: false,
    },
  },
}
