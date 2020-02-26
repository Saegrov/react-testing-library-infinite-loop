/* eslint-env node */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
    testEnvironment: 'jest-environment-jsdom-sixteen',
    setupFilesAfterEnv: ['./test-setup.js'],
};
