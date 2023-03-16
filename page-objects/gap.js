//const { Driver } = require("selenium-webdriver/chrome")

module.exports = {

    url: 'https://www.gap.com/',


    elements: {
        SignInLink: '//*[@id="sitewide-account-button-greeting"]',
        SignInTab: '//*[@id="MyAccountContainer"]/ul/li[1]/a',
        SignInHeader: '//*[@id="profile-ui"]/div/div/div[3]/div/h1',
        email: by.name("acc-verifyEmailAddress"),
        Continue: '//*[@id="profile-ui"]/div/div/div[3]/div/form/button',
       // password: by.name("password"),
        password: '//*[@id="profile-ui"]/div/div/div[3]/div/div[2]/form',
           //password: '//*[@name="password"]',
       SIGNIN: '//*[@id="profile-ui"]/div/div/div[3]/div/div[2]/form/label/input',
        ErrorMessage: '//*[@id="profile-ui"]/div/div/div[3]/div/form/label/div',
        Women: '//*[@id="topNavWrapper"]/div/div/ul/li[2]/div[1]/a',
        ShopForWomen: '//*[@id="utility-page"]/div/div[1]/div',
        Men: '//*[@id="topNavWrapper"]/div/div/ul/li[4]/div[1]/a',
        ShopforMen: '//*[@id="utility-page"]/div/div[1]/div'
    },

    clickElement: async function (objKey) {
        var selector = page.gap.elements[objKey];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).click(objKey);
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
    },

    inputPassword: async function (val) {
        var selector = page.gap.elements['password'];
        await driver.sleep(40000);
        return driver.findElement(selector).sendKeys(val);
    },
};