module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(axios)/)'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.jest_dom.js'],
  transform: {
    '^.+\\.(js|jsx?)$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.jsx'],
};
