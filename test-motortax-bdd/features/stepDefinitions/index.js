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

    await driver.findElement(By.id('vehicle-number')).sendKeys('6666');

    await driver.findElement(By.id('engine-cc')).sendKeys(600);

    await driver.findElement(By.id('insurance_company')).click();

    await driver.wait(until.elementLocated(By.id('insurance-0')), 30000);

    await driver.findElement(By.id('insurance-0')).click();

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
    await driver.get('http://localhost:3000/admin');

    await driver.wait(until.elementLocated(By.id('taxpayer-documents')), 30000);
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

    await driver.wait(until.elementLocated(By.id('btn-verify-3')), 30000);

    await driver.findElement(By.id('btn-verify-3')).click();

    await driver.wait(until.elementLocated(By.id('doc-verified-3')), 30000);
    expect(await driver.wait(until.elementLocated(By.id('doc-verified-3'))));
  }
);

Given(
  'Test view tax details functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.id('nav-tax-details')).click();

    await driver.wait(
      until.elementLocated(By.id('tax-details-container')),
      30000
    );
    expect(
      await driver.wait(until.elementLocated(By.id('tax-details-container')))
    );
  }
);

Given('Test Faq functionality', { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:3000/');
  await driver.findElement(By.id('nav-faqs')).click();

  await driver.wait(until.elementLocated(By.id('faqs-container')), 30000);
  expect(await driver.wait(until.elementLocated(By.id('faqs-container'))));
});

Given('Test support functionality', { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:3000/');
  await driver.findElement(By.id('nav-support')).click();

  await driver.wait(until.elementLocated(By.id('support-container')), 30000);
  expect(await driver.wait(until.elementLocated(By.id('support-container'))));
});

Given(
  'Test insurance agents functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.id('nav-companies')).click();

    await driver.findElement(By.id('insurance_company')).click();

    await driver.findElement(By.id('license_number')).click();

    await driver.findElement(By.id('vat_number')).click();

    await driver.findElement(By.id('address')).click();

    await driver.findElement(By.id('contact')).click();

    await driver.findElement(By.id('email')).click();

    await driver.findElement(By.id('btn-company-register')).click();

    await driver.wait(
      until.elementLocated(By.id('insurance-companies-screen')),
      30000
    );
    expect(
      await driver.wait(
        until.elementLocated(By.id('insurance-companies-screen'))
      )
    );
  }
);

Given(
  'Test Verify Insurance Company Functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.id('nav-admin')).click();

    await driver.findElement(By.id('menu-insurance-company')).click();

    await driver.wait(
      until.elementLocated(By.id('admin-insurance-companies-docs')),
      30000
    );
    expect(
      await driver.wait(
        until.elementLocated(By.id('admin-insurance-companies-docs'))
      )
    );
  }
);

Given(
  'Test Insurance Company Verification Message',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.id('nav-admin')).click();

    await driver.findElement(By.id('menu-insurance-company')).click();

    await driver.wait(until.elementLocated(By.id('btn-verify-3')), 30000);

    await driver.findElement(By.id('btn-verify-3')).click();

    await driver.wait(until.elementLocated(By.id('doc-verified-3')), 30000);
    expect(await driver.wait(until.elementLocated(By.id('doc-verified-3'))));
    
  }
);

Given(
  'Test Create User Functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.id('nav-login')).click();

    await driver.findElement(By.id('signup-link')).click();

    await driver.findElement(By.id('taxpayer-name')).sendKeys('Test');

    await driver.findElement(By.id('bluebook-number')).sendKeys('123');

    await driver.findElement(By.id('vehicle-number')).sendKeys('777');

    await driver.findElement(By.id('province')).sendKeys('12');

    await driver.findElement(By.id('lot')).sendKeys('40');

    await driver.findElement(By.id('vehicle-type')).sendKeys('Bike');

    await driver.findElement(By.id('engine-cc')).sendKeys('250');

    await driver.findElement(By.id('vehicle-registered-date')).sendKeys('01/12/2000');

    await driver.findElement(By.id('contact')).sendKeys('9234234234');

    await driver.findElement(By.id('email')).sendKeys('test@gmail.com');

    await driver.findElement(By.id('username')).sendKeys('tests');

    await driver.findElement(By.id('password ')).sendKeys('asd');

    await driver.findElement(By.id('confirm-password')).sendKeys('asd');

    await driver.findElement(By.id('last-tax-paid-date ')).sendKeys('02/11/2019');

    await driver.findElement(By.id('policy-number ')).sendKeys('55');

    await driver.findElement(By.id('tax-amount-paid ')).sendKeys('55555');

    await driver.findElement(By.id('btn-signup')).click();

    await driver.wait(until.elementLocated(By.id('login-container')), 30000);
    expect(await driver.wait(until.elementLocated(By.id('login-container'))));
    
  }
);

Given(
  'Test View Profile Functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.id('nav-login')).click();

    await driver.findElement(By.id('email')).sendKeys('');

    await driver.findElement(By.id('password')).sendKeys('');

    await driver.findElement(By.id('taxpayer-btn-login')).click();

    await driver.wait(until.elementLocated(By.id('profile-container')), 30000);
    expect(await driver.wait(until.elementLocated(By.id('profile-container'))));
    await driver.quit();
  }
  );