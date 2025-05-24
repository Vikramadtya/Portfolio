// jest.config.js
const nextJest = require('next/jest')({
  dir: './', // Path to Next.js app
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Handle module aliases
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transformIgnorePatterns: [ // Ensure specific node_modules are transformed if needed
    '/node_modules/(?!some-module-that-needs-transforming)/',
  ],
  // If using Babel explicitly:
  // transform: {
  //   '^.+\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  // },
};

module.exports = nextJest(customJestConfig);
