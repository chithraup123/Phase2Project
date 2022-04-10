@Sanity
Feature: Login feature of the https://www.saucedemo.com/

  Background: 
    Given I'm on login page of the application

  Scenario Outline: Validate successful login of the application
    When I enter username "<username>"
    And I enter password "<password>"
    And I click on login button
    Then I should be landed on home page

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |

  Scenario Outline: Validate login failure of the application
    When I enter username "<username>"
    And I enter password "<password>"
    And I click on login button
    Then I should get the error message as "<error>"

    Examples: 
      | username        | value        | error                                                                     |
      | locked_out_user | secret_sauce | Epic sadface: Username and password do not match any user in this service                       |
      | standard_user   | Abc@1233456  | Epic sadface: Username and password do not match any user in this service |