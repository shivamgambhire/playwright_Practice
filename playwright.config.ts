import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        actionTimeout: 15000
    },
    timeout: 30000,
    retries: 0,
    projects:[
        {
            name: "Chromium",
            use: { browserName: "chromium" }
        },
        {
            name: "firefox",
            use: {browserName: "firefox" }
        },
        {
            name: "webkit",
            use: {browserName: "webkit"}
        }
    ]    
};


export default config;