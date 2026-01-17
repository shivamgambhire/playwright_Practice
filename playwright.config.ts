<<<<<<< HEAD
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
=======
import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  testDir: 'tests',
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'off',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
  reporter: [
  ['list'],
  ['allure-playwright'],
]
}

export default config
>>>>>>> ddc4ef33bcff73c44b9b9ff49ea0e28e18a3917c
