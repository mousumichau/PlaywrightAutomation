import { test, expect } from '@playwright/test';
import { LoginPage } from  '../pages/login'
//Json->string->js object
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")));

test('Ecommerce App Login ', async ({ page }) => {
  
  const Login =new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login(dataset.username, dataset.password);

  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('SuperSecretePassword!');
  // await page.getByRole('button', { name: 'Login' }).click();
});