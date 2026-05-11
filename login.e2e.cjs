const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function loginTest() {
    let options = new chrome.Options();
    // options.addArguments('--headless');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        console.log('--- Starting Login E2E Test ---');

        // 1. Navigate to the Login Page
        await driver.get('http://localhost:5173/login');
        console.log('Navigated to Login Page');

        // 2. Wait for the form to be visible
        await driver.wait(until.elementLocated(By.id('emailOrPhone')), 10000);

        // 3. Fill in login details
        let emailField = await driver.findElement(By.id('emailOrPhone'));
        let passwordField = await driver.findElement(By.id('password'));

        await emailField.sendKeys('test@example.com');
        await passwordField.sendKeys('wrongpassword123');
        console.log('Entered credentials');

        // 4. Click the Login button
        let loginButton = await driver.findElement(By.css('.auth-btn'));
        await loginButton.click();
        console.log('Clicked Login button');

        // 5. Wait for error message (expected since we used wrong credentials)
        // Adjust the selector if your error message has a specific ID or class
        await driver.wait(until.elementLocated(By.className('error-message')), 5000);
        let errorMessage = await driver.findElement(By.className('error-message'));
        let errorText = await errorMessage.getText();
        
        console.log('Received expected error message:', errorText);

        if (errorText.includes('Invalid credentials')) {
            console.log('SUCCESS: Login error handling verified.');
        } else {
            console.log('FAILURE: Error message did not match expected text.');
        }

    } catch (error) {
        console.error('Test execution failed:', error);
    } finally {
        await driver.quit();
        console.log('Browser closed.');
    }
})();
