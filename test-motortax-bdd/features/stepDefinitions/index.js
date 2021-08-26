const { expect } = require('chai');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');
const { delay } = require('../utils/delay');

// 1A INPUT TAXPAYER DETAILS FEATURE TEST
// Given(
//   'Test input motor details functionality',
//   { timeout: 100000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     driver.manage().window().maximize();
//     await driver.get('http://localhost:3000/');
//     await driver.findElement(By.id('bluebook-number')).sendKeys('BDD');
//     await driver.findElement(By.id('vehicle-number')).sendKeys('BDD123');
//     await driver.findElement(By.id('engine-cc')).sendKeys(300);
//     await driver
//       .findElement(By.id('insurance-number'))
//       .sendKeys('123456789abcdef');
//     await driver.findElement(By.id('btn-continue')).click();
//     await driver.wait(until.elementLocated(By.id('tax-already-paid')), 40000);
//     expect(await driver.wait(until.elementLocated(By.id('tax-already-paid'))));
//     await driver.quit();
//   }
// );

// 1B PAY TAX FEATURE TEST
// Given('Test pay tax functionality', { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('http:localhost:3000/tax-summary');

//   await driver.findElement(By.id('btn-pay-tax')).click();

//   await driver.wait(until.elementLocated(By.id('payment-success-div')), 30000);
//   expect(await driver.wait(until.elementLocated(By.id('payment-success-div'))));
//   await driver.quit();
// });

// 1C download Statement FEATURE TEST
// Given(
//   'Test download statement functionality',
//   { timeout: 30000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/tax-summary');

//     await driver.findElement(By.id('btn-pay-tax')).click();

//     await driver.findElement(By.id('download-statement-btn')).click();

//     await driver.wait(
//       until.elementLocated(By.id('payment-success-div')),
//       30000
//     );
//     expect(
//       await driver.wait(until.elementLocated(By.id('payment-success-div')))
//     );
//     await driver.quit();
//   }
// );

// 1D INSURANCE PAYMENT OPTION FEATURE TEST
/*Given(
  'Test redirect to insurance page functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.id('btn-pay-here')).click();

    await driver.wait(until.elementLocated(By.id('home-screen')), 30000);
    expect(await driver.wait(until.elementLocated(By.id('home-screen'))));
    await driver.quit();
  }
);*/

// 1E PAY INSURANCE FEATURE TEST
/*Given(
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
    await driver.quit();
  }
);*/

// 1F DOWNLOAD INSURANCE STATEMENT FEATURE TEST
/*Given(
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
    await driver.quit();
  }
);*/

// 1G VERIFY TAXPAYER FEATURE TEST
// Given(
//   'Test taxpayer verification functionality',
//   { timeout: 30000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/login');

//     await driver.findElement(By.id('btn-switch-admin')).click();

//     await driver.wait(until.elementLocated(By.id('email')), 30000);

//     await driver.findElement(By.id('email')).sendKeys('sa@a.com');
//     await driver.findElement(By.id('password')).sendKeys('s');
//     await driver.findElement(By.id('admin-btn-login')).click();
//     await driver.wait(until.elementLocated(By.id('btn-switch-docs')), 30000);
//     await driver.findElement(By.id('btn-switch-docs')).click();

//     await driver.wait(until.elementLocated(By.id('taxpayer-documents')), 30000);
//     expect(
//       await driver.wait(until.elementLocated(By.id('taxpayer-documents')))
//     );
//     await driver.quit();
//   }
// );

// 1H TAXPAYER VERIFICATION MESSAGE FEATURE TEST
// Given(
//   'Test taxpayer verification message functionality',
//   { timeout: 30000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/admin');

//     await driver.findElement(By.id('btn-switch-admin')).click();

//     await driver.wait(until.elementLocated(By.id('email')), 30000);

//     await driver.findElement(By.id('email')).sendKeys('sa@a.com');
//     await driver.findElement(By.id('password')).sendKeys('s');
//     await driver.findElement(By.id('admin-btn-login')).click();
//     await driver.wait(until.elementLocated(By.id('btn-switch-docs')), 30000);
//     await driver.findElement(By.id('btn-switch-docs')).click();

//     await driver.wait(until.elementLocated(By.id('btn-verify-3')), 30000);

//     await driver.findElement(By.id('btn-verify-3')).click();

//     await driver.wait(until.elementLocated(By.id('doc-verified-3')), 30000);
//     expect(await driver.wait(until.elementLocated(By.id('doc-verified-3'))));
//     await driver.quit();
//   }
// );

// 1I VIEW TAX DETAILS FEATURE TEST
// Given(
//   'Test view tax details functionality',
//   { timeout: 30000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/');

//     await driver.findElement(By.id('nav-tax-details')).click();

//     await driver.wait(
//       until.elementLocated(By.id('tax-details-container')),
//       30000
//     );
//     expect(
//       await driver.wait(until.elementLocated(By.id('tax-details-container')))
//     );
//     await driver.quit();
//   }
// );

// 1J FAQs FEATURE TEST
// Given('Test Faq functionality', { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('http://localhost:3000/');
//   await driver.findElement(By.id('nav-faqs')).click();

//   await driver.wait(until.elementLocated(By.id('faqs-container')), 30000);
//   expect(await driver.wait(until.elementLocated(By.id('faqs-container'))));
//   await driver.quit();
// });

// 1K SUPPORT FEATURE TEST
// Given('Test support functionality', { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('http://localhost:3000/');
//   await driver.findElement(By.id('nav-support')).click();

//   await driver.wait(until.elementLocated(By.id('support-container')), 30000);
//   expect(await driver.wait(until.elementLocated(By.id('support-container'))));
//   await driver.quit();
// });

// 1L CREATE INSURANCE AGENTS ACCOUNT FEATURE TEST
// Given(
//   'Test create insurance agents account functionality',
//   { timeout: 30000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/');

//     await driver.findElement(By.id('nav-companies')).click();

//     await driver.findElement(By.id('insurance_company')).sendKeys('testt');

//     await driver.findElement(By.id('license_number')).sendKeys('132');

//     await driver.findElement(By.id('vat_number')).sendKeys('123');

//     await driver.findElement(By.id('address')).sendKeys('kly');

//     await driver.findElement(By.id('contact')).sendKeys('12345');

//     await driver.findElement(By.id('email')).sendKeys('tes@t.bdd');

//     await driver.findElement(By.id('btn-company-register')).click();

//     await driver.wait(
//       until.elementLocated(By.id('insurance-companies-screen')),
//       30000
//     );
//     expect(
//       await driver.wait(
//         until.elementLocated(By.id('insurance-companies-screen'))
//       )
//     );
//     await driver.quit();
//   }
// );

// 1M VERIFY INSURANCE COMPANY FEATURE TEST
// Given(
//   'Test Verify Insurance Company Functionality',
//   { timeout: 30000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/login');

//     await driver.findElement(By.id('btn-switch-admin')).click();

//     await driver.wait(until.elementLocated(By.id('email')), 30000);

//     await driver.findElement(By.id('email')).sendKeys('sa@a.com');
//     await driver.findElement(By.id('password')).sendKeys('s');
//     await driver.findElement(By.id('admin-btn-login')).click();
//     await driver.wait(until.elementLocated(By.id('btn-switch-docs')), 30000);
//     await driver.findElement(By.id('btn-switch-docs')).click();

//     await driver.wait(until.elementLocated(By.id('btn-verify-3')), 30000);

//     await driver.findElement(By.id('btn-verify-3')).click();

//     await driver.findElement(By.id('menu-insurance-company')).click();

//     await driver.wait(
//       until.elementLocated(By.id('admin-insurance-companies-docs')),
//       30000
//     );
//     expect(
//       await driver.wait(
//         until.elementLocated(By.id('admin-insurance-companies-docs'))
//       )
//     );
//     await driver.quit();
//   }
// );

// 1N INSURANCE COMPANY VERIFICATION MESSAGE FEATURE TEST
// Given(
//   'Test Insurance Company Verification Message',
//   { timeout: 30000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/login');

//     await driver.findElement(By.id('btn-switch-admin')).click();

//     await driver.wait(until.elementLocated(By.id('email')), 30000);

//     await driver.findElement(By.id('email')).sendKeys('sa@a.com');
//     await driver.findElement(By.id('password')).sendKeys('s');
//     await driver.findElement(By.id('admin-btn-login')).click();
//     await driver.wait(until.elementLocated(By.id('btn-switch-docs')), 30000);
//     await driver.findElement(By.id('btn-switch-docs')).click();

//     await driver.findElement(By.id('menu-insurance-company')).click();

//     await driver.wait(until.elementLocated(By.id('doc-verified-2')), 30000);
//     expect(await driver.wait(until.elementLocated(By.id('doc-verified-2'))));
//      await driver.quit();
//   }
// );

// 1O CREATE USER FEATURE TEST
// Given('Test Create User Functionality', { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('http:localhost:3000/');

//   await driver.findElement(By.id('nav-login')).click();

//   await driver.findElement(By.id('signup-link')).click();

//   await driver.findElement(By.id('taxpayer-name')).sendKeys('Test');

//   await driver.findElement(By.id('bluebook-number')).sendKeys('123');

//   await driver.findElement(By.id('vehicle-number')).sendKeys('777');

//   await driver.findElement(By.id('province')).sendKeys('12');

//   await driver.findElement(By.id('lot')).sendKeys('40');

//   await driver.findElement(By.id('vehicle-type')).sendKeys('Bike');

//   await driver.findElement(By.id('engine-cc')).sendKeys('250');

//   await driver
//     .findElement(By.id('vehicle-registered-date'))
//     .sendKeys('01/12/2000');

//   await driver.findElement(By.id('contact')).sendKeys('9234234234');

//   await driver.findElement(By.id('email')).sendKeys('test@gmail.com');

//   await driver.findElement(By.id('username')).sendKeys('tests');

//   await driver.findElement(By.id('password')).sendKeys('asd');

//   await driver.findElement(By.id('confirm-password')).sendKeys('asd');

//   await driver.findElement(By.id('last-tax-paid-date')).sendKeys('02/11/2019');

//   await driver.findElement(By.id('policy-number')).sendKeys('55');

//   await driver.findElement(By.id('tax-amount-paid')).sendKeys('55555');

//   await driver.findElement(By.id('btn-signup-taxpayer')).click();

//   await driver.wait(until.elementLocated(By.id('login-container')), 30000);
//   expect(await driver.wait(until.elementLocated(By.id('login-container'))));
//   await driver.quit();
// });

// 1P VIEW PROFILE FEATURE TEST
// Given('Test View Profile Functionality', { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('http://localhost:3000/');

//   await driver.findElement(By.id('nav-login')).click();

//   await driver.findElement(By.id('email')).sendKeys('test@gmail.com');

//   await driver.findElement(By.id('password')).sendKeys('asd');

//   await driver.findElement(By.id('taxpayer-btn-login')).click();

//   await driver.wait(until.elementLocated(By.id('profile-container')), 30000);
//   expect(await driver.wait(until.elementLocated(By.id('profile-container'))));
//   await driver.quit();
// });

// 1Q LOGIN SYSTEM FEATURE TEST
// Given('Test Login System Functionality', { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('http://localhost:3000/');

//   await driver.findElement(By.id('nav-login')).click();

//   await driver.findElement(By.id('email')).sendKeys('test@gmail.com');

//   await driver.findElement(By.id('password')).sendKeys('asd');

//   await driver.findElement(By.id('taxpayer-btn-login')).click();

//   await driver.wait(until.elementLocated(By.id('profile-container')), 30000);
//   expect(await driver.wait(until.elementLocated(By.id('profile-container'))));
//   await driver.quit();
// });

// 1R DELETE ACCOUNT FEATURE TEST
// Given(
//   'Test Delete Account Functionality',
//   { timeout: 30000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     driver.manage().window().maximize();

//     await driver.get('http://localhost:3000/');

//     await driver.findElement(By.id('nav-login')).click();

//     await driver.findElement(By.id('email')).sendKeys('test@gmail.com');

//     await driver.findElement(By.id('password')).sendKeys('asd');

//     await driver.findElement(By.id('taxpayer-btn-login')).click();

//     await driver.wait(until.elementLocated(By.id('taxpayer-delete')), 30000);

//     await driver.findElement(By.id('taxpayer-delete')).click();

//     await driver.switchTo().alert().accept();

//     await driver.wait(until.elementLocated(By.id('home-screen')), 30000);
//     expect(await driver.wait(until.elementLocated(By.id('home-screen'))));
//   }
// );

// 1S CHECK HISTORY FEATURE TEST
// Given(
//   'Test Check History Functionality',
//   { timeout: 30000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/');

//     await driver.findElement(By.id('nav-login')).click();

//     await driver.findElement(By.id('email')).sendKeys('susan@tdd.com');

//     await driver.findElement(By.id('password')).sendKeys('s');

//     await driver.findElement(By.id('taxpayer-btn-login')).click();

//     await driver.wait(
//       until.elementLocated(By.id('payment-history-container')),
//       30000
//     );
//     expect(
//       await driver.wait(
//         until.elementLocated(By.id('payment-history-container'))
//       )
//     );
//   }
// );

// 1T VIEW INSURANCE AGENTS FEATURE TEST
// Given(
//   'Test View Insurance Agents Functionality',
//   { timeout: 30000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/');

//     await driver.findElement(By.id('nav-companies')).click();

//     await driver.wait(until.elementLocated(By.id('new-company-1')), 30000);
//     expect(await driver.wait(until.elementLocated(By.id('new-company-1'))));
//   }
// );

// 1U VIEW STATISTICAL DATA FEATURE TEST
// Given(
//   'Test View Statistical Data Functionality',
//   { timeout: 30000 },
//   async function () {
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/');

//     await driver.findElement(By.id('nav-login')).click();

//     await driver.findElement(By.id('email')).sendKeys('susan@tdd.com');

//     await driver.findElement(By.id('password')).sendKeys('s');

//     await driver.findElement(By.id('taxpayer-btn-login')).click();

//     await driver.wait(
//       until.elementLocated(By.id('taxpayer-graph-SUD789')),
//       30000
//     );
//     expect(
//       await driver.wait(until.elementLocated(By.id('taxpayer-graph-SUD789')))
//     );
    
//   }
// );


Given(
  'Test Write Feedback Functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/tax-summary');

    await driver.findElement(By.id('btn-pay-tax')).click();

    await driver.findElement(By.id('message')).sendKeys('The feature is very easy to use and understand');

    await driver.findElement(By.id('feedback-form-submit')).click();
    
    await driver.wait(
      until.elementLocated(By.id('feedback-response-message')),
      30000
    );
    expect(
      await driver.wait(until.elementLocated(By.id('feedback-response-message')))
    );
    await driver.quit();
  }
);
