//const { Driver } = require("selenium-webdriver/chrome")

module.exports = {

    url: 'https://www.gap.com/',


    elements: {
        SignInLink: '//*[@id="sitewide-account-button-greeting"]',
        SignInTab: '//*[@id="MyAccountContainer"]/ul/li[1]/a',
        SignInHeader: '//*[@id="profile-ui"]/div/div/div[3]/div/h1',
        email: '//*[@id="verify-account-email"]',
        Continue: '//*[@id="profile-ui"]/div/div/div[3]/div/form/button',
        Password: '//*[@id="profile-ui"]/div/div/div[3]/div/div[2]/form/label/input',
        SIGNIN: '//*[@id="profile-ui"]/div/div/div[3]/div/div[2]/form/label/input',
        ErrorMessage: '//*[@id="profile-ui"]/div/div/div[3]/div/div[1]/div[2]/div/div/div/span[2]',
        Women: '//*[@id="topNavWrapper"]/div/div/ul/li[2]/div[1]/a',
        ShopForWomen: '//*[@id="utility-page"]/div/div[1]/div',
        Men: '//*[@id="topNavWrapper"]/div/div/ul/li[4]/div[1]/a',
        ShopforMen: '//*[@id="utility-page"]/div/div[1]/div'
    },

    clickElement: async function (objKey) {
        var selector = page.gap.elements[objKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function (objKey) {
        var selector = page.gap.elements[objKey];
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector));
    },

    inputEmail: async function (val) {
        var selector = page.gap.elements['email'];
        await driver.sleep(1000);
        return driver.findElement(selector).sendKeys(val);
        //     inputUserName: async function(val) {
        //         var selector = page.jootza.elements['username']; 
        //         await driver.sleep(2000);
        //         return driver.findElement(selector).sendKeys(val);

    },
    //  inputUserName: async function(val) {
    //         var selector = page.jootza.elements['username']; 
    //          await driver.sleep(2000);
    //          return driver.findElement(selector).sendKeys(val);

    //   this.When(/^I enter emailid "([^"]*)"$/, function (objKey1) {
    //        return page.gap.inputEmailId(objKey1);


    inputPassword: async function (val) {
        var selector = page.gap.elements['Password'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);
    }

};