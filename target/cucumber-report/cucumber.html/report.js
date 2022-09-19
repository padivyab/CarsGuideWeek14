$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "\r\nAs user I want to search car",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"\u003cmake\u003e\" in results.",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "NSW - Central Coast",
        "$35,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Jeep",
        "Compass",
        "NSW - Hunter",
        "$40,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Holden",
        "Barina",
        "NSW - Hunter",
        "$35,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover",
        "NSW - Central Coast",
        "$200,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Kia",
        "Rio",
        "NT - South",
        "$60,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Hyundai",
        "Getz",
        "NSW - Riverina",
        "$30,000"
      ],
      "line": 24,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23107963100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"CR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Central Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$35,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Honda\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 297349400,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 373088900,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 3951692100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 967509500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1359897900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1208086700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1111053600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$35,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1136054500,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4266595700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 117900,
  "status": "passed"
});
formatter.after({
  "duration": 179700,
  "status": "passed"
});
formatter.before({
  "duration": 7816887800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Compass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Jeep\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 967759200,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 3188507000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 562251500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1186848200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compass",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1124627100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1185836900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1134614300,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4301361400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
formatter.after({
  "duration": 60100,
  "status": "passed"
});
formatter.before({
  "duration": 11148639300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Holden\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Barina\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$35,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Holden\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 987302600,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 8516147400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 869288200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Holden",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1279583300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Barina",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1130907600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1122546800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$35,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1207163400,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6498273800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Holden",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 78800,
  "status": "passed"
});
formatter.after({
  "duration": 30500,
  "status": "passed"
});
formatter.before({
  "duration": 13071953000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Range Rover\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Central Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$200,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Land Rover\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 338146200,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 9809665000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 552836200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1172801500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Range Rover",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1142251400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1183856200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$200,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1167589400,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6211168800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 135200,
  "status": "passed"
});
formatter.after({
  "duration": 46500,
  "status": "passed"
});
formatter.before({
  "duration": 14194626700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Rio\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NT - South\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Kia\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 65300,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 277503300,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 3650557100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 47446200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1140164900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rio",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 5722835500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - South",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1129447400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1198304500,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5985325200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.after({
  "duration": 28000,
  "status": "passed"
});
formatter.before({
  "duration": 17566126000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Getz\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Riverina\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Hyundai\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24700,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 201330600,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 5591039100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 275757200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1720510700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Getz",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1187898400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Riverina",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1176908500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1168136600,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6402581200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 62100,
  "status": "passed"
});
formatter.after({
  "duration": 57300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"\u003cmake\u003e\" in results.",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Mazda",
        "2",
        "NSW - Hunter",
        "$20,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Ford",
        "Ecosport",
        "VIC - Melbourne",
        "$90,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Ford",
        "Fiesta",
        "WA - Perth",
        "$200,000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Honda",
        "Accord",
        "NSW - Sydney",
        "$80,000"
      ],
      "line": 43,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Audi",
        "Q5",
        "NSW - Sydney",
        "$150,000"
      ],
      "line": 44,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Kia",
        "Niro",
        "NSW - Sydney",
        "$80,000"
      ],
      "line": 45,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14468861100,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Mazda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Mazda\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 395102900,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 4984747600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 860435200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1222506400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 5609084500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1178439100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1151785500,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 7741918300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 55400,
  "status": "passed"
});
formatter.after({
  "duration": 19300,
  "status": "passed"
});
formatter.before({
  "duration": 16135857300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Ecosport\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"VIC - Melbourne\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Ford\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 590659400,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 5624612400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 183911000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1462184800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ecosport",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1157992800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Melbourne",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1180091000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1191738300,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 8764358800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 70400,
  "status": "passed"
});
formatter.after({
  "duration": 31200,
  "status": "passed"
});
formatter.before({
  "duration": 18877291900,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Fiesta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"WA - Perth\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$200,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Ford\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45700,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 601827700,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 579869600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 10386681400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1500483600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fiesta",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1490642500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - Perth",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1195295500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$200,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1184326500,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 14062959000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 63900,
  "status": "passed"
});
formatter.after({
  "duration": 31000,
  "status": "passed"
});
formatter.before({
  "duration": 16703851200,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Accord\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Honda\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2222477900,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 6310519100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 1218593000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2012317000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accord",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1301775900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1254302800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1231644200,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 19620314000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 76500,
  "status": "passed"
});
formatter.after({
  "duration": 51100,
  "status": "passed"
});
formatter.before({
  "duration": 20384517200,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Q5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$150,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Audi\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 76100,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 480681100,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 6513540600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 1781996800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1471155800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Q5",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1233552700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1208275700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1284076700,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 20880647900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 65000,
  "status": "passed"
});
formatter.after({
  "duration": 45900,
  "status": "passed"
});
formatter.before({
  "duration": 25851392500,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Niro\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Kia\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 171700,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 927043500,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 9561439500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 134162900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1524887000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Niro",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1350903200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1594957200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1708486400,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 12126650400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 52200,
  "status": "passed"
});
formatter.after({
  "duration": 28900,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify Functionality",
  "description": "\r\nAs user I want to find dealers list",
  "id": "find-the-dealers-and-verify-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"\u003cKeywords\u003e\" are display on page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;",
  "rows": [
    {
      "cells": [
        "Keywords"
      ],
      "line": 14,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 15,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;2"
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 16,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;3"
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 17,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;4"
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 18,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;5"
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 19,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;6"
    },
    {
      "cells": [
        "ANDREA MOTORI SERVICE"
      ],
      "line": 20,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;7"
    },
    {
      "cells": [
        "Oxford Motors"
      ],
      "line": 21,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 79646112100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"3 Point Motors Epping\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 74600,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1084404000,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 4001316500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 57674500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Point Motors Epping",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 270955600,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 3747444200,
  "status": "passed"
});
formatter.after({
  "duration": 39500,
  "status": "passed"
});
formatter.before({
  "duration": 16026658500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"4WD Specialist Group\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 750807900,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 6067825500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 69947500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4WD Specialist Group",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 357810000,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 3946825600,
  "status": "passed"
});
formatter.after({
  "duration": 24200,
  "status": "passed"
});
formatter.before({
  "duration": 12790621800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"5 Star Auto\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25700,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 961332700,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 4562016800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 75155000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 Star Auto",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 217180000,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 3779742600,
  "status": "passed"
});
formatter.after({
  "duration": 48600,
  "status": "passed"
});
formatter.before({
  "duration": 12239603200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"A \u0026 M Car Sales Pty Ltd\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 533200,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 186662300,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 4099398600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 52548200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A \u0026 M Car Sales Pty Ltd",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 265180500,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 4831862900,
  "status": "passed"
});
formatter.after({
  "duration": 1134100,
  "status": "passed"
});
formatter.before({
  "duration": 16157905400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"A1 MOTORS COMPANY\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 52800,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1079584900,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 20274343600,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d105.0.5195.126)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ELH5PJN7\u0027, ip: \u0027192.168.0.194\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1caae801548627cd80965a6c39364ff3, clickElement {id\u003d4938f91f-8783-4fac-bbca-906bd4b82636}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.126, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\DIVYAP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55867}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55867/devtoo..., se:cdpVersion: 105.0.5195.126, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (1caae801548627cd80965a6c39364ff3)] -\u003e xpath: //div[@class\u003d\u0027uhf-menu-wrapper\u0027]/div[1]/ul[1]/li[1]/div[1]/div[1]/div[1]/ul[1]/li[4]/a[1]]\nSession ID: 1caae801548627cd80965a6c39364ff3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.carguru.utilities.Utility.clickOnElement(Utility.java:53)\r\n\tat com.carguru.pages.FindDealersSearch.ClickOnFindDealer(FindDealersSearch.java:40)\r\n\tat com.carguru.steps.finddealersteps.iClickFindADealer(finddealersteps.java:13)\r\n\tat ✽.And I click find a dealer(src/test/java/resources/featurefile/finddealers.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "A1 MOTORS COMPANY",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1820988900,
  "status": "passed"
});
formatter.before({
  "duration": 9218853700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"ANDREA MOTORI SERVICE\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 710928400,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 3596657100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 495798000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ANDREA MOTORI SERVICE",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 328408800,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 2470418800,
  "status": "passed"
});
formatter.after({
  "duration": 18500,
  "status": "passed"
});
formatter.before({
  "duration": 9005437900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"Oxford Motors\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26700,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 821394700,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 4733612200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 50680000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxford Motors",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 207685500,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 3525414200,
  "status": "passed"
});
formatter.after({
  "duration": 16200,
  "status": "passed"
});
});