/**
 * For a detailed explanation regarding each configuration property, visit:
 * https:
 */

import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: "ts-jest",
  testEnvironment: "jsdom",
};

export default config;
