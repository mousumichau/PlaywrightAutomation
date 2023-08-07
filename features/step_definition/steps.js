const {Given} = require('@cucumber/cucumber')
const {POManager} = require('../../pageobjects/POManager');
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');
Given('a login to Ecommerce application with {string} and {string}', {timeout : 100*1000}, async function (username, password) {
 // const browser = await  playwright.chromium.launch();
  //const context = await browser.newContext();
  //const page = await context.newPage();
  this.poManager = new POManager();
  const loginPage = this.poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(username,password);


  });

  // When('Add {string} to cart', async function (productName) {
  //   // Write code here that turns the phrase above into concrete actions
  //   this.dashboardPage = this.poManager.getDashboardPage();
  //   await this.dashboardPage.searchProductAddCart(productName);
  //   await this.dashboardPage.navigateToCart();

  // });

  // Then('Verify {string} is displayed in the cart', async function (productName) {
  //   // Write code here that turns the phrase above into concrete actions
  //   const cartPage =this.poManager.getCartPage();
  //   await cartPage.VerifyProductIsDisplayed(productName);
  //   await cartPage.Checkout();
  // });
  // When('Enter valid details and place the order',async function () {
  //   // Write code here that turns the phrase above into concrete actions
  //   const ordersReviewPage = this.poManager.getOrdersReviewPage();
  //   await ordersReviewPage.searchCountryAndSelect("ind","India");
  //   const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  //   console.log(orderId);
  // });

  // Then('Verify order in present in the OrderHistory', async function () {
  //   // Write code here that turns the phrase above into concrete actions
  //   await this.dashboardPage.navigateToOrders();
  //   const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
  //   await ordersHistoryPage.searchOrderAndSelect(orderId);
  //   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
  // });
