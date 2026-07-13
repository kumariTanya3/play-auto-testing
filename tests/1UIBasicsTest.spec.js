const {test, expect} = require('@playwright/test')
test.only('First test', async ({browser}) =>  
{
  const usetName = page.locator('#username');
  //7. await is only required when we are performing actual action.
  const signin = page.locator('#signInBtn'); //10. creating a locator for the 'signIn' button. we can use this locator to perform any action on the button.
  const context = await browser.newContext() 
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  console.log(await page.title());
  //1. if we need to test for 'email' dialougue box, we will use locator. ex= css, xpath. (mostly use css)
  await usetName.fill('rahulshettyacademy@gmail.com'); //2. on inspecting the web- we get the cssfor 'email' which has different components.
  //type, fill = both do same. but use 'fill'
  
  /*3. ways to write the locator in playwright
  if id is present 
  css -> tagname#id (or) #id

  if class is present
  css -> tagname.class (or) .class

  write css based on any attribute
  css -> tagname[attribute='value'] (or) [attribute='value']

  write css with traversing from Parent to Child
  css -> parenttagname >> childtagname (or) parenttagname childtagname

  if needs to write the locator based on text
  text = ' '
  */
 await page.locator("[type='password']").fill('learning');
 //11. await page.locator("#signInBtn").click(); before doing '10.'th
 await signin.click();  //12. after '10.'th
 /*4. css:
 [style*='block'] where '*' used to show partial statement only
 [style = display : block] is complete stament
 */
console.log(await page.locator("[style*='block']").textContent()) ; //5. to get the text content of the element
await expect(page.locator("[style*='block']")).toContainText('Incorrect'); //6. to check if the text is present in the element is incorreect. if not, test will 'fail'.

//8. now we need to edit the incorrect value un the edit box and enter the correct value. so we need to clear the existing value.
await usetName.fill(''); //9. to clear the existing value in the edit box, we can use 'fill' method with empty string. it wipes of the existing value in the edit box.
await usetName.fill('rahulshettyacademy');



});

test('Page test', async ({page}) =>
    {
      await page.goto("https://google.com");        
        console.log(await page.title());
        await expect(page).toHaveTitle ("Google"); 
    }
)