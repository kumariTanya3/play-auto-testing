import { test, expect } from '@playwright/test';

test('Playwright Special locators', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name : "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

    //locator

});

//assigment
/*
test('Search Playwright on Google', async ({ page }) => {
    // 1. Open Google
    await page.goto('https://google.com');

    // 2. Search "Playwright"
    const searchInput = page.locator('textarea[name="q"], input[name="q"]');
    await searchInput.fill('Playwright');
    await searchInput.press('Enter');

    // 3. Verify the title contains "Playwright"
    await expect(page).toHaveTitle(/Playwright/);
});
*/



