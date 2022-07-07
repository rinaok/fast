import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
    fullyParallel: true,
    testMatch: /.*\.pw\.spec\.ts$/,
    use: {
        viewport: {
            height: 1280,
            width: 720,
        },
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },
        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        },
    ],
    reporter: "list",
};

export default config;
