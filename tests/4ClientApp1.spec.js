const {test, expect} = require('@playwright/test')
test.only('Clent App', async ({page}) =>  
{
  const pronm = 'car'; //2. product-name
  const products = page.locator(".card-body"); //1. this is like array that has all products
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill('anshika@gmail.com');
  await page.locator("#userPassword").fill('Iamking@000');
  await page.locator("[value='Login']").click();
  await page.waitForLoadState('networkidle'); 
  await page.locator(".card-body b").first().waitFor(); //6. if images and other details take time to load
  const titles =await page.locator(".card-body b").allTextContents();
  //console.log(titles);
  const c = await products.count();
  for(let i = 0; i < c; ++i)
  {
    if(await products.nth(i).locator("b").textContent() === pronm)
    //products.nth(i).locator("b") //3. this locator scope of searching is now the ith product, i.e, it won't search entire page, as now we have minimised its range within the product(it has title, price, add to cart, and view options)
  {
    //4. add product to cart, if product-name matches
    await products.nth(i).locator("text = Add To Cart").click();
    break; //5. if product found;
  }
  }
  await page.locator("[routerlink*=cart]").click();
  //6. [routerlink*=cart], where
  //'routerlink' is an attribute
  //'*' is used for partial text
  
  //page.locator("div li").waitFor(); //9. error, as waiting for complete page to load, result in this line resulting mutliple elemts on the same page, so if one item is loaded, we will proceed to check for 'car' as in '7.'
  page.locator("div li").first().waitFor(); //8. we are tracking the exact attribute that has our product-name.
  //this statement 'first().waitfor()' helps in waiting for page to load, even if one element is in page. as using 'waitfor()' simply returned error 
  //const b = await page.locator("h3:has-text('car')").isVisible();
  //7. ':has-text' is known as psuedo-class;
  //expect(b).toBeTruthy();
  //line 33 and 34 causing error
  const b = await page.locator("h3", {hasText: 'car'});
  await expect(b).toBeVisible();
  await page.locator("text=Checkout").click();
  //10. or we can use attribute, button to locate.
  await page.locator("[placeholder*='Country']").pressSequentially("ind", {delay: 200}); //200ms
  const dropdown = page.locator(".ta-results");
  //11. '.ta-results' is the section of options available while typing country name. 
  await dropdown.waitFor();
  const numoptn = await dropdown.locator("button").count(); //12. number-of-options counting;
  for(let i = 0; i < numoptn; ++i)
  {
    const text = await dropdown.locator("button").nth(i).textContent(); //13. each text in the drop down as we enter the string 'ind' sequentially;
    if(text === " India") //14. this text is written with space and 'I' because, while inspecting the web-element the word 'india' is written like that. and if the text in playwright doesn't match, it will return error while executing the automation. because this will retrieve the text directly for matching the text.   
    //or we can use trimming or other method to make task easier like:
    //if(text.includes("India")) //this also works //this may cause some error if other words like india is present... so better use trim, or use this 'includes' statement is no dupicate word like 'india' is in search element. here 'british indian ocean territory' is present. so better stick to first method, or trim word.
    {
      await dropdown.locator("button").nth(i).click; 
      break;
    }
  }
  await page.pause();
});
