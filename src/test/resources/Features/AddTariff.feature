#Author: your.email@your.domain.com
Feature: Tariff plan of the new customer

  Scenario: Tariff plan
    Given User launch the telecom site
    And User Click on Add Tariff Plan button
    When User filling up all the details of the tariff plan
    And User clicks the submit button
    Then User will be displayed with congratulation message
@smoke @regression
  Scenario: Tariff plan with one dim list
    Given User launch the telecom site
    And User Click on Add Tariff Plan button
    When User filling up all the details of the tariff plan with one dim list
      | 300 | 200 | 299 | 288 | 288 | 22 | 2 |
    And User clicks the submit button
    Then User will be displayed with congratulation message

  Scenario: Tariff plan with one dim map
    Given User launch the telecom site
    And User Click on Add Tariff Plan button
    When User filling up all the details of the tariff plan with one dim map
      | Rent | 300 |
      | Flm  | 200 |
      | Fim  | 299 |
      | Fsp  | 288 |
      | Lpm  | 288 |
      | Ipm  |  22 |
      | Spc  |   2 |
    And User clicks the submit button
    Then User will be displayed with congratulation message

  Scenario: Tariff plan with two dim list
    Given User launch the telecom site
    And User Click on Add Tariff Plan button
    When User filling up all the details of the tariff plan with two dim list
      | 300 | 200 | 299 | 288 | 288 | 22 | 2 |
      | 301 | 201 | 298 | 289 | 289 | 23 | 3 |
      | 302 | 203 | 297 | 287 | 287 | 24 | 4 |
      | 303 | 203 | 299 | 288 | 288 | 22 | 2 |
      | 304 | 201 | 299 | 288 | 288 | 22 | 2 |
    And User clicks the submit button
    Then User will be displayed with congratulation message

  Scenario: Tariff plan with two dim map
    Given User launch the telecom site
    And User Click on Add Tariff Plan button
    When User filling up all the details of the tariff plan with two dim map
      | Rent | Flm | Fim | Fsp | Lpm | Ipm | Spc |
      |  300 | 200 | 299 | 288 | 288 |  22 |   2 |
      |  301 | 201 | 298 | 289 | 289 |  23 |   3 |
      |  302 | 203 | 297 | 287 | 287 |  24 |   4 |
      |  303 | 203 | 299 | 288 | 288 |  22 |   2 |
      |  304 | 201 | 299 | 288 | 288 |  22 |   2 |
    And User clicks the submit button
    Then User will be displayed with congratulation message
