const {test, expect} = require('@playwright/test')
test('First test', async ({browser}) =>  
{
  //17. don't initilize the userName and signin before the page is created. because the page is created after the browser is launched. so we need to create the page first and then we can use the locators.
  const context = await browser.newContext() 
  const page = await context.newPage();
  const usetName = page.locator('#username');
  //7. await is only required when we are performing actual action.
  const signin = page.locator('#signInBtn'); //10. creating a locator for the 'signIn' button. we can use this locator to perform any action on the button.
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
 await page.locator("[type='password']").fill('Learning@830$3mK2');
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
await signin.click();
//await page.waitForLoadState('networkidle'); //13.this wassuggested by vs code.
//14. now as we signed in, some products are visible, like iphonex. we will dive deep in this product
// await page.locator("card-body a").click(); //15. to access on the specific area 'iphone x', and to get its title.
//console.log(await page.locator("card-body a").textContent()); //16. to get the text content of the element

console.log(await page.locator(".card-body a").nth(0).textContent()); //18. resolving the error- as we got 4 elements with 'card-body a' locator, we need to use 'nth' method to get the specific element. ex= await page.locator("card-body a").nth(0).textContent() - this will give the first element's text content.or we can use 'first' method to get the first element's text content. ex= await page.locator("card-body a").first().textContent() - this will give the first element's text content.
//console.log(await page.locator("card-body a").first().textContent());
//we have methods like 'first', 'last', 'nth' to get the specific element from the list of elements. so we can't use something like second.... we have to use nth(1) only.
console.log(await page.locator(".card-body a").nth(1).textContent());


});

test('Page test', async ({page}) =>
    {
      await page.goto("https://google.com");        
        console.log(await page.title());
        await expect(page).toHaveTitle ("Google"); 
    }
)