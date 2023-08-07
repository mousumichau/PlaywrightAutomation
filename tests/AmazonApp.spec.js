
const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager')
//const { LoginPage } = require('../pageobjects/LoginPage');
//require('../pageobjects/LoginPage');



test('Amazon App Login', async ({ page }) => {
  const poManager = new POManager();
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(username,password);

  //await page.goto('https://www.amazon.com/');
  // await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  // await page.getByLabel('Mobile phone number or email').click();
  // await page.getByLabel('Mobile phone number or email').fill('antara92.mou@gmail.com');
  // await page.getByLabel('Continue').click();
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('I@w2Ba$E');
  // await page.getByLabel('Sign in').click();
  //await page.locator('#input-box-otp').fill('929893');
 // await page.getByLabel('Submit code').click();
  //await page.getByRole('link', { name: 'Health & Personal Care Shop now' }).click();
});