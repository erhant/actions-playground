module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@assemblyscript/.*)'],
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest',
  },
  roots: ['./test'],
  globals: {
    __REDIS_URL__: 'redis://default:redispw@localhost:6379',
  },
};
