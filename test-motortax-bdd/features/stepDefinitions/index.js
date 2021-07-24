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

  await driver.findElement(By.id('btn-pay-tax')).click();

  await driver.wait(until.elementLocated(By.id('payment-success-div')), 30000);
  expect(await driver.wait(until.elementLocated(By.id('payment-success-div'))));
  //await driver.quit();
});

Given(
  'Test download statement functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/tax-summary');

    await driver.findElement(By.id('btn-pay-tax')).click();

    await driver.findElement(By.id('download-statement-btn')).click();

    await driver.wait(
      until.elementLocated(By.id('payment-success-div')),
      30000
    );
    expect(
      await driver.wait(until.elementLocated(By.id('payment-success-div')))
    );
    //await driver.quit();
  }
);

Given(
  'Test redirect to insurance page functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.id('btn-pay-here')).click();

    await driver.wait(until.elementLocated(By.id('home-screen')), 30000);
    expect(await driver.wait(until.elementLocated(By.id('home-screen'))));
    //await driver.quit();
  }
);

Given(
  'Test input motor details choose insurance company functionality',
  { timeout: 100000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('btn-pay-here')).click();
    await driver.findElement(By.id('bluebook-number')).sendKeys('6');
    // await driver.sleep(delay);
    await driver.findElement(By.id('vehicle-number')).sendKeys('6666');
    //await driver.sleep(delay);
    await driver.findElement(By.id('engine-cc')).sendKeys(600);
    //await driver.sleep(delay);
    await driver.findElement(By.id('insurance_company')).click();
    delay;
    await driver.findElement(By.id('insurance-0')).click();

    //await driver.sleep(delay);
    await driver.findElement(By.id('btn-calculate-insurance')).click();

    await driver.wait(
      until.elementLocated(By.id('insurance-summary-screen')),
      30000
    );
    expect(
      await driver.wait(until.elementLocated(By.id('insurance-summary-screen')))
    );
    // await driver.quit();
  }
);

Given(
  'Test download insurance statement functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/insurance-summary');

    await driver.findElement(By.id('btn-pay-insurance')).click();

    await driver.findElement(By.id('download-statement-btn')).click();

    await driver.wait(
      until.elementLocated(By.id('payment-success-div')),
      30000
    );
    expect(
      await driver.wait(until.elementLocated(By.id('payment-success-div')))
    );
    
  }
);

Given(
  'Test taxpayer verification functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.id('nav-admin')).click();

    await driver.wait(
      until.elementLocated(By.id('taxpayer-documents')),
      30000
    );
    expect(
      await driver.wait(until.elementLocated(By.id('taxpayer-documents')))
    );
    // await driver.quit();
  }
);

Given(
  'Test taxpayer verification message functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.id('nav-admin')).click();
    delay
    await driver.findElement(By.id('btn-verify-1')).click();
    
    await driver.wait(
      until.elementLocated(By.id('doc-verified-1')),
      30000
    );
    expect(
      await driver.wait(until.elementLocated(By.id('doc-verified-1')))
    );
     await driver.quit();
  }
);