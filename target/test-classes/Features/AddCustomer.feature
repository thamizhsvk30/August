#Author: your.email@your.domain.com
@regression
Feature: Creating a new customer
  Scenario: Add Customer Plan
    Given User launch telecom site
    And User Click on add customer button
    When User filling up all the details
    And User click on submit button
    Then User will be displayed customer id is generated

 
  Scenario: Add customer with one dim list
    Given User launch telecom site
    And User Click on add customer button
    When User filling up all the details with one dim list
      | java | selenium | js@gmail.com | alu | 6549851234 |
    And User click on submit button
    Then User will be displayed customer id is generated

  Scenario: Add customer with one dim map
    Given User launch telecom site
    And User Click on add customer button
    When User filling up all the details with one dim map
      | Fname     | thamizh      |
      | Lname     | selvan       |
      | email     | js@gmail.com |
      | address   | Ariyalur     |
      | phonumber |   9840145965 |
    And User click on submit button
    Then User will be displayed customer id is generated
@smoke @regression
  Scenario: Add Customer with two dim list
    Given User launch telecom site
    And User Click on add customer button
    When User filling up all the details with two dim list
      | java       | selenium | js@gmail.com | alu | 98675849949 |
      | thamizh    | selvan   | js@gmail.com | alu | 98675849949 |
      | senthamizh | selvan   | js@gmail.com | alu | 98675849949 |
      | thamizh    | anbu     | js@gmail.com | alu | 98675849949 |
    And User click on submit button
    Then User will be displayed customer id is generated

  Scenario: Add Customer with two dim map
    Given User launch telecom site
    And User Click on add customer button
    When User filling up all the details with two dim map
      | FirstN     | LastN    | Mail         | Addr | Phono       |
      | java       | selenium | js@gmail.com | alu  | 98675849949 |
      | thamizh    | selvan   | js@gmail.com | alu  | 98675849949 |
      | senthamizh | selvan   | js@gmail.com | alu  | 98675849949 |
      | thamizh    | anbu     | js@gmail.com | alu  | 98675849949 |
    And User click on submit button
    Then User will be displayed customer id is generated
