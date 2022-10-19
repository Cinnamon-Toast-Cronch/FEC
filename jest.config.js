const config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },

  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    // '\\.(js|jsx)?$': 'babel-jest',
    // '\\.svg$': '<rootDir>/jest-svg-transformer.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  extensionsToTreatAsEsm: ['.jsx'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(axios)/)'],

};

module.exports = config;

// module.exports = {
//   preset: 'ts-jest',
//   transform: {
//     '^.+\\.(ts|tsx)?$': 'ts-jest',
//     "^.+\\.(js|jsx)$": "babel-jest",
//   }
// };

