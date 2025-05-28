import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './'
});

const config: Config = {
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    '!app/**/*.test.{js,jsx,ts,tsx}' // Exclude test files from coverage
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1
    }
  },
  coverageReporters: ['text', 'lcov', 'json', 'html'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  // moduleNameMapper: {
  //   '^~/(.*)$': '<rootDir>/app/$1'
  // },
  modulePaths: ['<rootDir>/app'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(lodash-es)/)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom']
};

export default createJestConfig(config);
