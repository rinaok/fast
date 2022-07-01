import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testMatch: /.*\.pw\.spec\.ts$/,
    use: {
        baseURL: "http://localhost:6006",
    },
    reporter: "list",
};

export default config;
