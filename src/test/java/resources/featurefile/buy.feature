Feature: Search Functionality

  As user I want to search car

  Scenario Outline: Search the buy car with model

    Given I am on homepage
    When  I mouse hover on buy+sell tab
    And   I click Search car link
    Then  I navigate to "New & Used Car Search - carsguide"
    And   I select make "<make>"
    And   I select model "<model>"
    And   I select location "<location>"
    And   I select price "<price>"
    And   I click on find my next car tab
    Then  I should see the make "<make>" in results.
    Examples:
      | make       | model       | location            | price    |
      | Honda      | CR-V        | NSW - Central Coast | $35,000  |
      | Jeep       | Compass     | NSW - Hunter        | $40,000  |
      | Holden     | Barina      | NSW - Hunter        | $35,000  |
      | Land Rover | Range Rover | NSW - Central Coast | $200,000 |
      | Kia        | Rio         | NT - South          | $60,000  |
      | Hyundai    | Getz        | NSW - Riverina      | $30,000  |

  Scenario Outline: Search the used car with model

    Given I am on homepage
    When  I mouse hover on buy+sell tab
    And   I click user click
    Then  I navigate to a "Used Cars For Sale"
    And   I select make "<make>"
    And   I select model "<model>"
    And   I select location "<location>"
    And   I select price "<price>"
    And   I click on find my next car tab
    Then  I should see the make "<make>" in results.
    Examples:
      | make  | model    | location        | price    |
      | Mazda | 2        | NSW - Hunter    | $20,000  |
      | Ford  | Ecosport | VIC - Melbourne | $90,000  |
      | Ford  | Fiesta   | WA - Perth      | $200,000 |
      | Honda | Accord   | NSW - Sydney    | $80,000  |
      | Audi  | Q5       | NSW - Sydney    | $150,000 |
      | Kia   | Niro     | NSW - Sydney    | $80,000  |









