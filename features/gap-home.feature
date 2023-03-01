Feature: As a customer I should be able to navigate gap.com website

@gap @sign-in @loginError
Scenario: Customer is displayed with the sign in header
Given I am on "gap.com"
When I click on "SignInLink" 
Then I should see "SignInTab" 
When I click on "SignInTab"
Then I should see "SignInHeader"
And I enter email 'test123@test.com'
And I click on "Continue"
And I enter Password "test"
And I click on "SIGNIN"
Then I should see "ErrorMessage"

# @gap @women
# Scenario: Customer is displayed with the women's clothing
# Given I am on "gap.com"
# When I click on "Women" 
# Then I should see "ShopForWomen"

# @gap @Men 
# Scenario: Customer is displayed with the men's clothing option
# Given I am on the gap.com website
# When I cli ck on the Men icon
# Then the shopping page with various options for women clothing should open

# @gap @40%off
# Scenario: Customer is displayed with a tiny pop-up window
# Given I am on the gap.com website
# When I click on the 40% off link
# Then a tiny pop-up window displaying the percentage off details should open

# @gap @details
# Scenario: Customer is displayed with discount details
# Given I am on the gap.com website
# When I click on the details link
# Then a pop-up window with the discount details should open


