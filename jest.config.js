const config = {
  verbose: true,
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
    '\\.svg$': '<rootDir>/jest-svg-transformer.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(axios)/)'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'client/src/**/*.{js,jsx}',
    '!**/node_modules/**',
    'server/**/*.{js,jsx}',
  ],
};

module.exports = config;
