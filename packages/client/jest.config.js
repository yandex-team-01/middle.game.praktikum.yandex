import dotenv from 'dotenv';
dotenv.config();

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  moduleNameMapper: {
    '\\.(css|scss|png)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
};
