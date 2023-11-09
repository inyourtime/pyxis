import type { JestConfigWithTsJest } from 'ts-jest'
// import { pathsToModuleNameMapper } from 'ts-jest'
// import * as compilerOptions from './tsconfig.json'
// const { compilerOptions } = require('./tsconfig')

const jestConfig: JestConfigWithTsJest = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: true,
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/helpers/setup.ts"]
  // moduleNameMapper: {
  //   "^@controllers/(.*)$": "<rootDir>/src/controllers/$1",
  //   "^@cores/(.*)$": "<rootDir>/src/cores/$1",
  //   "^@declarations/(.*)$": "<rootDir>/src/declarations/$1",
  //   "^@routes/(.*)$": "<rootDir>/src/routes/$1",
  //   "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  //   "^@entities/(.*)$": "<rootDir>/src/entities/$1",
  //   // "^@repositories/(.*)$": "<rootDir>/src/repositories/$1",
  //   "^@jridgewell/trace-mapping$": "<rootDir>/node_modules/@jridgewell/trace-mapping"
  // }
  // setupFiles: ["./src/cores/configs/configs.ts"]
  
}

export default jestConfig