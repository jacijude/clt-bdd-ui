Feature: As a customer I should be able to navigate gap.com website

@gap @sign-in 
Scenario: Customer is displayed with the sign in page
Given I am on the gap.com website
When I click on the Sign in link
Then the sign in drop down box with Sign in link and more options should open
And when I click on the Sign in tab
Then the sign in page should open

@gap @women
Scenario: Customer is displayed with the women clothing options
Given I am on the gap.com website
When I click on the Women icon
Then the shopping page with various options for women clothing should open

@gap @Men 
Scenario: Customer is displayed with the men's clothing option
Given I am on the gap.com website
When I cli ck on the Men icon
Then the shopping page with various options for women clothing should open

@gap @40%off
Scenario: Customer is displayed with a tiny pop-up window
Given I am on the gap.com website
When I click on the 40% off link
Then a tiny pop-up window displaying the percentage off details should open

@gap @details
Scenario: Customer is displayed with discount details
Given I am on the gap.com website
When I click on the details link
Then a pop-up window with the discount details should open


