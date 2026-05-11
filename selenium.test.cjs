const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
    // Setup Chrome options
    let options = new chrome.Options();
    // options.addArguments('--headless'); // Uncomment to run without opening a browser window

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        console.log('--- Starting Basic Selenium Test ---');
        
        // 1. Navigate to your local dev server
        await driver.get('http://localhost:5173');
        console.log('Navigated to Home Page');

        // 2. Wait for the Navbar to load
        await driver.wait(until.elementLocated(By.className('nav-logo')), 10000);
        
        // 3. Check Page Title
        let title = await driver.getTitle();
        console.log('Page title is:', title);

        // 4. Click on 'About Us' link
        let aboutLink = await driver.findElement(By.xpath("//a[contains(text(), 'About Us')]"));
        await aboutLink.click();
        await driver.wait(until.urlContains('about'), 5000);
        console.log('Navigation to About page successful');

    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await driver.quit();
        console.log('Browser closed.');
    }
})();
