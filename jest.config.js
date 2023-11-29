const {defaults} = require('jest-config');

module.exports = {
  ...defaults,
  setupFiles: ['./jest.polyfill.js'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': 'babel-jest', // Transform CSS files using Babel during Jest tests
  },
}

