import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 50,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('card 378730202602443 be ok', async () => {
    const form = await page.$('.check_card form');
    const input = await page.$('.check_card input');
    await input.type('378730202602443');
    const submit = await form.$('button');
    await submit.click();
    await page.waitForSelector('.valid');
  });

  test('card 418730202602443 is NOT ok', async () => {
    const form = await page.$('.check_card form');
    const input = await page.$('.check_card input');
    await input.type('418730202602443');
    const submit = await form.$('button');
    await submit.click();
    await page.waitForSelector('.invalid');
  });
});
