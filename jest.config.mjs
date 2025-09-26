/** @type {import('jest').Config} */
export default {
    preset: "ts-jest",
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    testEnvironment: "node",
    projects: [
        {
            displayName: "unit",
            preset: "ts-jest",
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            roots: ["<rootDir>/tests"],
            testPathIgnorePatterns: ["\.browser\.(spec|test)\.[jt]sx?$", "/tests/wire/"],
            setupFilesAfterEnv: [],
        },
        {
            displayName: "browser",
            preset: "ts-jest",
            testEnvironment: "<rootDir>/tests/BrowserTestEnvironment.ts",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            roots: ["<rootDir>/tests"],
            testMatch: ["<rootDir>/tests/unit/**/?(*.)+(browser).(spec|test).[jt]s?(x)"],
            setupFilesAfterEnv: [],
        },
        {
            displayName: "wire",
            preset: "ts-jest/presets/default-esm",
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            transform: {
                "^.+\\.(ts|tsx)$": [
                    "ts-jest",
                    {
                        useESM: true,
                        tsconfig: "<rootDir>/tests/tsconfig.json",
                    },
                ],
                "^.+/node_modules/(msw|@mswjs/interceptors|until-async)/.*\\.js$": [
                    "ts-jest",
                    {
                        useESM: false,
                        tsconfig: {
                            allowJs: true,
                            esModuleInterop: true,
                            module: "commonjs",
                        },
                    },
                ],
            },
            transformIgnorePatterns: ["node_modules/(?!(msw|@mswjs/interceptors|until-async)/)"],
            roots: ["<rootDir>/tests/wire"],
            setupFilesAfterEnv: ["<rootDir>/tests/mock-server/setup.ts"],
        },
    ],
    workerThreads: false,
    passWithNoTests: true,
};
