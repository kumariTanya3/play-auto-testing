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
  console.log(titles);
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
  const b = page.locator("h3:has-text('car')").isVisible();
  //':has-text' is known as psuedo-class;
  expect(b).toBeTruthy();
});
