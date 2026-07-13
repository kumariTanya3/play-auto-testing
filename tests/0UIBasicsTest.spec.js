//const {test} = require('@playwright/test') //0.1th comment
//const {expect} = require('@playwright/test') //13. the needed package.

//14. the single line for 'required'
const {test, expect} = require('@playwright/test')
//0. test imported, so test function will run
//test('First test', function ()   //2. and the await will be recognised only inside async function, so we need to make this function async
//3. asyncronous function- async function, so that we can use await inside this function
//4. test('First test', async function () //we wont use this async function, instead we will use arrow funct.
test('First test', async ({browser}) =>  //5. 'browser' is the object which will be passed to this function, so we can use it to open browser and page, and it will be passed by playwright, so we don't need to create it. we can use it directly. this value, 'browser', is now added as a playwright fixer. 'fixer' is a function which will be called before the test, and it will return the value which will be passed to the test function. so we can use this 'browser' object directly in our test function. 'fixer' are like 'global variables' which will be available in all the test functions.

//10. test('First test', async (browser, page)
{
  //1. 
  //playwright code-
  //step 1- open browser
  //step 2- open new page (wait for 2 sec)
  //await
  //step 3- click on the link (wait for 2 sec)
  
  //in JS, each step runs at one time and won't give time for before step to complete. so we use await to wait for each step to complete before moving to next step.

  //6. brower, 'chrome' - when it will be opened, so all 'pligins' or 'cookies' information from before will be restored.
  const context = await browser.newContext() //name any 'browser' //7. open new fresh browser
  //8. give me fresh instance which has inbuilt proxy.
  const page = await context.newPage();
  //9. if we don't want to write for both 'context' and 'page' without any plugin or etc, then we can do '//10'
  await page.goto("https://playwright.dev/docs/test-timeouts")
  console.log(await page.title());
});

//11. if we want to run only one test case, in a bunch of given tests. so we can use 'test.only' instead of 'test', so that only this test will run and rest of the tests will be ignored. this is useful when we want to debug a particular test case.
//test.only('Page test', async ({page}) =>
test('Page test', async ({page}) =>
    {
      await page.goto("https://google.com");
        //12. to check the page we landed on is matching the title or not. so we 'get the title' - then put 'assertion' if it is correct or not. so we use 'expect' function to check the title of the page.
        //expect(page).toHaveTitle("Google");
        //expect(page).toHaveTitle(/Google/); //if we want to check the title contains 'Google' or not, then we can use this regex.
        console.log(await page.title());
        await expect(page).toHaveTitle ("Google"); // refer to '13' comment, we have this 'assertion' from playwright so we have to have this 'required' 
        //'await' is mandatory.
    }
)