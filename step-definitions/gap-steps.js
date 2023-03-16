//onst helpers = require("../runtime/helpers")

module.exports = function () {

    this.Given(/^I am on "([^"]*)"$/, function(ok) {
        return helpers.loadPage(page.gap.url);
    });

    this.When(/^I click on "([^"]*)"$/, function(objKey) {
        return page.gap.clickElement(objKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function(objKey) {
        return page.gap.elementExists(objKey);
    });

    this.When(/^I enter email "([^"]*)"$/, function(objKey1) {
        return page.gap.inputEmail(objKey1);
    });

//    this.When(/^I enter password "([^"]*)"$/, function(objKey1) {
//     return page.gap.inputPassword(objKey1);
//  });
};
