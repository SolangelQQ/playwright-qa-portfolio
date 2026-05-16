import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'html',

  use: {
    // This is the website we'll be testing
    baseURL: 'https://www.saucedemo.com',

    // Always open the browser visibly while learning
    headless: false,

    // Record a trace when a test fails — helps you debug
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        launchOptions: {
              slowMo: 800,
        }
       },

    },
  ],
});