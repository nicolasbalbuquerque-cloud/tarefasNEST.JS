/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  // 🎯 Adicione esta linha abaixo para o Jest encontrar os arquivos .test.tsx dentro da src
  testMatch: ["**/src/**/*.test.(ts|tsx)"],
};

module.exports = config;