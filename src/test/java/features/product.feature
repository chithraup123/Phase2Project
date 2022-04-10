@Sanity
Feature: Compare the price of the of the Product

  Background: 
    Given I'm on login page of the application

  Scenario: Validate successful login of the application
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click on login button
    And I should be landed on home page
    Then I compare the prices of following products
      | Sauce Labs Backpack   | $29.99 |
      | Sauce Labs Bike Light |  $9.99 |
