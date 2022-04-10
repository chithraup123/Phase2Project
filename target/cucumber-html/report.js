$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "Login feature of the https://www.saucedemo.com/",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate successful login of the application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be landed on home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m on login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_m_on_login_page_of_the_pplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate successful login of the application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_username_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate login failure of the application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message as \"\u003cerror\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "value",
        "error"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "standard_user",
        "Abc@1233456",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m on login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_m_on_login_page_of_the_pplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate login failure of the application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username \"locked_out_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_username_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_get_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m on login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_m_on_login_page_of_the_pplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate login failure of the application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_username_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_get_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/product.feature");
formatter.feature({
  "name": "Compare the price of the of the Product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m on login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_m_on_login_page_of_the_pplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate successful login of the application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_username_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I compare the prices of following products",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light",
        "$9.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductSteps.i_compare_the_prices_of_following_products(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});