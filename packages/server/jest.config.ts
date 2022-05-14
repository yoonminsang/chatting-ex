export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
// moduleFileExtensions: ['js', 'ts'],
// testEnvironment: 'node',
// transform: {
//   '\\.ts?$': 'ts-jest',
// },
// transformIgnorePatterns: ['<rootDir>/node_modules/'],
// modulePathIgnorePatterns: ['<rootDir>/dist/'],
// moduleNameMapper: {
//   '^@/(.*)$': '<rootDir>/src/$1',
// },
//   globalSetup: '<rootDir>/src/config/dot-env-config.ts',
