Feature: Find the dealers and verify Functionality

  As user I want to find dealers list

  Scenario Outline: Find the dealers and verify the dealers are in list

    Given  I am on homepage
    When   I mouse hover on buy+sell tab
    And    I click find a dealer
    Then   I navigate to a to "Find a Car Dealership Near You"
    And    I should see the dealer names "<Keywords>" are display on page
    And    I click on find button
    Examples:
      | Keywords                |
      | 3 Point Motors Epping   |
      | 4WD Specialist Group    |
      | 5 Star Auto             |
      | A & M Car Sales Pty Ltd |
      | A1 MOTORS COMPANY       |
      | ANDREA MOTORI SERVICE   |
      | Oxford Motors           |









