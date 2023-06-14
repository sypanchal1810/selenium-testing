const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set up Chrome options
const options = new chrome.Options();
// options.addArguments('--headless'); // Run Chrome in headless mode (without UI) means it will not open the browser window

// Set up the WebDriver
const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();

// Immediately Invoked Asynchronous Function
(async function testWebsite() {
  try {
    // Open the TSF website
    await driver.get('https://www.thesparksfoundationsingapore.org/');

    console.log('\nTesting...');

    // 1. Home Page
    // 1.1 Logo
    const logo = await driver.findElement({ xpath: '//*[@id="home"]/div/div[1]/h1/a/img' });
    if (await logo.isDisplayed()) {
      console.log('\nTSF Logo exists');
    } else {
      console.log('\nTSF Logo not found');
    }

    // 1.2 Navbar
    const navbar = await driver.findElement({ className: 'navbar' });
    if (await navbar.isDisplayed()) {
      console.log('\nNavigation bar exists');
    } else {
      console.log('\nNavigation bar does not exists');
    }

    // 2. About Page > Vision, Mission and Values Page
    await driver
      .findElement({
        xpath: '//*[@id="link-effect-3"]/ul/li[1]/a ',
      })
      .click();

    await driver
      .findElement({
        css: '#link-effect-3 > ul > li:nth-child(1) > ul > li:nth-child(1) > a',
      })
      .click();

    // 2.1 Vision Statement
    await driver
      .findElement({
        xpath: '/html/body/div[2]/div/div[1]/div/div[1]/div[1]/div/p',
      })
      .getAttribute('innerHTML')
      .then(res => {
        console.log(`\n******************** Vision Statement ********************\n${res}`);
      })
      .catch(err => {
        console.log('\nVision Statement not found');
        if (process.env.NODE_ENV === 'development') console.log(err);
      });

    // 2.2 Mission Statement
    await driver
      .findElement({
        xpath: '/html/body/div[2]/div/div[1]/div/div[1]/div[2]/div/p',
      })
      .getAttribute('innerHTML')
      .then(res => {
        console.log(`\n******************** Mission Statement ********************\n${res}`);
      })
      .catch(err => {
        console.log('\nMission Statement not found');
        if (process.env.NODE_ENV === 'development') console.log(err);
      });

    // 3. Contact Us page
    await driver.findElement({ linkText: 'Contact Us' }).click();

    // 3.1 Contact form
    await driver
      .findElement({ xpath: '//form[@id="contact-form"]' })
      .then(res => {
        if (res.isDisplayed()) {
          console.log('Contact form exists');
        }
      })
      .catch(err => {
        console.log('Contact form not found');
        if (process.env.NODE_ENV === 'development') console.log(err);
      });

    // 3.2 Location
    const mapEl = await driver.findElement({ tagName: 'iframe' });
    if (await mapEl.isDisplayed()) {
      console.log('\nLocation on Google map appeared');
    } else {
      console.log('\nLocation on Google map not appeared');
    }

    // 4. Policies Page
    await driver
      .findElement({
        xpath: '//*[@id="link-effect-3"]/ul/li[2]/a',
      })
      .click();

    // 4.1 Policies
    await driver
      .findElement({
        xpath: '//*[@id="link-effect-3"]/ul/li[2]/ul/li[1]/a',
      })
      .click()
      .then(() => {
        console.log(`\nViewing TSF Policies`);
      })
      .catch(err => {
        console.log('\nPolicies Page not found');
        if (process.env.NODE_ENV === 'development') console.log(err);
      });

    // 4.2 Code of Conduct
    await driver
      .findElement({
        css: 'body > div.w3l_inner_section.about-w3layouts > div > div.col-md-3.agile-blog-sidebar > div > ul > li:nth-child(2) > a',
      })
      .click()
      .then(() => {
        console.log(`\nViewing TSF Code of Ethics and Conduct`);
      })
      .catch(err => {
        console.log('\nCode of Ethics and Conduct Page not found');
        if (process.env.NODE_ENV === 'development') console.log(err);
      });

    // 5. Join us page
    await driver.findElement({ linkText: 'Join Us' }).click();

    // 5.1 Why join us
    await driver
      .findElement({
        xpath: '//*[@id="link-effect-3"]/ul/li[5]/ul/li[1]',
      })
      .click()
      .then(() => {
        console.log(`\nViewing Why Join Us Page`);
      })
      .catch(err => {
        console.log('\nJoin Us Page not found');
        if (process.env.NODE_ENV === 'development') console.log(err);
      });

    // 5.2 Join us Form
    const joinUsEl = await driver.findElement({ xpath: '/html/body/div[2]/div/div[2]/div[2]/div/form' });
    if (await joinUsEl.isDisplayed()) {
      console.log('\nJoin us form exist');
    } else {
      console.log('\nJoin Us Form not found');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  } finally {
    // Close the browser
    console.log('\nClosing...');
    await driver.quit();
  }
})();
