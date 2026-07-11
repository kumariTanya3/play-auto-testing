// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */

//6. this was original= export default defineConfig({
// but we write following , to show 'config' is a variable that is storing the following  information
const config = ({
  testDir: './tests',
  //1. default timeout is 30s. if page isn't laoded in 30s it will timeout.
  timeout : 120 * 1000, // 2. this is applicable to every step
  expect : {
    timeout : 150 * 1000, //3. applicable exclusively for assertion validations
  },
  //5. when we want to see the reporting in HTML, see 'reposrter'
  reporter : 'html',
    use: {
    //4. which browser to run, we'll use 'object'
      browserName : 'webkit',

      /* Force it to open your local Brave browser instead of default Chromium/Edge */
      //launchOptions: {
        // FOR WINDOWS (Uncomment the line below if you are on Windows)
        //executablePath: "D:\Downloads\BraveBrowserSetup.exe",
        //  'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',



      //headless: true // Set to true if you don't want the browser pop-up to show
      headless : false

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  },

});
module.exports = config //7. to make this available across all the files in the project


//the below code was original

// // @ts-check
// import { defineConfig, devices } from '@playwright/test';
//
// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // import dotenv from 'dotenv';
// // import path from 'path';
// // dotenv.config({ path: path.resolve(__dirname, '.env') });
//
// /**
//  * @see https://playwright.dev/docs/test-configuration
//  */
// export default defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('')`. */
//     // baseURL: 'http://localhost:3000',
//
//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },
//
//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },
//
//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },
//
//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },
//
//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },
//
//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],
//
//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://localhost:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });
//

