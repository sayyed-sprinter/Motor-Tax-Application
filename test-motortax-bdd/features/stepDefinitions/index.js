const { expect } = require('chai');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');
const { delay } = require('../utils/delay');

Given(
  'Test input motor details functionality',
  { timeout: 100000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('bluebook-number')).sendKeys('5');
    // await driver.sleep(delay);
    await driver.findElement(By.id('vehicle-number')).sendKeys('5555');
    //await driver.sleep(delay);
    await driver.findElement(By.id('engine-cc')).sendKeys(350);
    //await driver.sleep(delay);
    await driver.findElement(By.id('insurance-number')).sendKeys('15s565rf');
    //await driver.sleep(delay);
    await driver.findElement(By.id('btn-continue')).click();
    await driver.sleep(delay);
    //await driver.sleep(delay);

    await driver.wait(until.elementLocated(By.id('tax-summary-screen')), 30000);
    expect(
      await driver.wait(until.elementLocated(By.id('tax-summary-screen')))
    );
    // await driver.quit();
  }
);
Given('Test pay tax functionality', { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser('chrome').build();
   await driver.get('http://localhost:3000/tax-summary');
  await driver.sleep(delay);
 await driver.findElement(By.id('btn-continue')).click();

 await driver.wait(until.elementLocated(By.id('payment-success-div')), 30000);
expect(await driver.wait(until.elementLocated(By.id('payment-success-div'))));
//await driver.quit();
});

Given('Test download statement functionality', { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser('chrome').build();
   await driver.get('http://localhost:3000/payment-success');
  await driver.sleep(delay);
 await driver.findElement(By.id('download-statement-btn')).click();

 await driver.wait(until.elementLocated(By.id('payment-success-div')), 30000);
expect(await driver.wait(until.elementLocated(By.id('payment-success-div'))));
//await driver.quit();
});
