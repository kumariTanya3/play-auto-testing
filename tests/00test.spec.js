//0. this was made to check what error will be thrown if await is run without async
/*
const {test, expect} = require('@playwright/test')
test('First test', ({browser}) =>  
{
  
  const context = await browser.newContext() 
  const page = await context.newPage();
  const usetName = page.locator('#username');
  const signin = page.locator('#signInBtn'); 
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  console.log(await page.title());
  await usetName.fill('rahulshettyacademy@gmail.com'); 
 await page.locator("[type='password']").fill('Learning@830$3mK2');
});
*/

//launching browser
const { firefox } = require('playwright');  // Or 'chromium' or 'webkit'.
(async () => {
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await browser.close();
})();
