const helpers = require("../runtime/helpers")

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

    this.Then(/^I enter email "([^"]*)"$/, function(ok1) {
        return page.gap.inputEmail(ok1);
    });

  //     this.When(/^I enter username "([^"]*)"$/ , function(objKey1) {
//         return page.jootza.inputUserName(objKey1);
//     });

    this.Then(/^I enter Password "([^"]*)"$/, function (objKey1) {
        return page.gap.inputPassword(objKey1);
    });

};