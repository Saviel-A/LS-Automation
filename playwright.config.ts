import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 3 : undefined,
  reporter: [["line"], ["allure-playwright"]],
  use: {
    headless: false,
    video: {
      mode: "on-first-retry",
      size: { width: 1920, height: 1080 },
    },
    screenshot: "on",
    actionTimeout: 0,
    trace: "on",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 13'],
    //     //  viewport: { width: 1280, height: 720 },
    //   },
    // },
  ],
});
