//ASSISGMENT
//end-to-end web application testing 

const {test, expect} = require('@playwright/test')
test('Clent App', async ({page}) =>  
{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill('anshika@gmail.com');
  await page.locator("#userPassword").fill('Iamking@000');
  await page.locator("[value='Login']").click();
  await page.waitForLoadState('networkidle'); 

  const titles =await page.locator(".card-body b").allTextContents();
  console.log(titles);

});

test('UI Controls', async({page}) =>
{
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  const usetName = page.locator('#username');
  const signin = page.locator('#signInBtn'); 
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");

  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click(); 
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  console.log(await page.locator(".radiotextsty").last().isChecked()); 
  await page.locator("#terms").click(); 
  await expect(page.locator("#terms")).toBeChecked(); 
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy(); 
  const doc = page.locator("[href*='documents-request']")
  await expect(doc).toHaveAttribute("class", "blinkingText");

});

test('Child Page Window', async({browser}) =>
{
  const context = await browser.newContext();
  const page = await context.newPage();
  const usernm = page.locator('#username'); //30. for '29.'
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const doc = page.locator("[href*='documents-request']")

  const [newPage] = await Promise.all([ 
    context.waitForEvent('page'),
    doc.click(),
  ]) 
  const text = await newPage.locator(".red").textContent();
  const arrtext = text.split("@") 
  const domain = arrtext[1].split(" ")[0] 
  console.log(domain);
  await page.locator("#username").fill(domain);
  await page.pause();
  console.log(await page.locator("#username").inputValue());
  
});