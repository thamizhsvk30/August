$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "Creating a new customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Add Customer Plan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User launch telecom site",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.user_launch_telecom_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_Click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filling up all the details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_filling_up_all_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_will_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add customer with one dim list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User launch telecom site",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.user_launch_telecom_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_Click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filling up all the details with one dim list",
  "rows": [
    {
      "cells": [
        "java",
        "selenium",
        "js@gmail.com",
        "alu",
        "6549851234"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_filling_up_all_the_details_with_one_dim_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" value\u003d\"Submit\" name\u003d\"submit\"\u003e is not clickable at point (302, 587). Other element would receive the click: \u003ciframe id\u003d\"primis_playerSekindoSPlayer5f3b9330e2d58\" title\u003d\"Primis Player Videos\" scrolling\u003d\"no\" allowfullscreen\u003d\"\" style\u003d\"border: none; position: fixed; bottom: 10px; width: 315px; height: 177px; box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 6px 3px; border-radius: 1px; z-index: 2147483646; left: 10px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d84.0.4147.125)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-GDM44V2\u0027, ip: \u0027192.168.42.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.125, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\SETHAM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51132}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f9f3c8332fd2d4145b926b8c81493678\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.telecom.stepdefination.AddCustomerSteps.user_click_on_submit_button(AddCustomerSteps.java:102)\r\n\tat ✽.User click on submit button(src/test/resources/Features/AddCustomer.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User will be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_will_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add customer with one dim map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User launch telecom site",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.user_launch_telecom_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_Click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filling up all the details with one dim map",
  "rows": [
    {
      "cells": [
        "Fname",
        "thamizh"
      ]
    },
    {
      "cells": [
        "Lname",
        "selvan"
      ]
    },
    {
      "cells": [
        "email",
        "js@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "Ariyalur"
      ]
    },
    {
      "cells": [
        "phonumber",
        "9840145965"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_filling_up_all_the_details_with_one_dim_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_will_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Customer with two dim list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User launch telecom site",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.user_launch_telecom_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_Click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filling up all the details with two dim list",
  "rows": [
    {
      "cells": [
        "java",
        "selenium",
        "js@gmail.com",
        "alu",
        "98675849949"
      ]
    },
    {
      "cells": [
        "thamizh",
        "selvan",
        "js@gmail.com",
        "alu",
        "98675849949"
      ]
    },
    {
      "cells": [
        "senthamizh",
        "selvan",
        "js@gmail.com",
        "alu",
        "98675849949"
      ]
    },
    {
      "cells": [
        "thamizh",
        "anbu",
        "js@gmail.com",
        "alu",
        "98675849949"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_filling_up_all_the_details_with_two_dim_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_will_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Customer with two dim map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User launch telecom site",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.user_launch_telecom_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_Click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filling up all the details with two dim map",
  "rows": [
    {
      "cells": [
        "FirstN",
        "LastN",
        "Mail",
        "Addr",
        "Phono"
      ]
    },
    {
      "cells": [
        "java",
        "selenium",
        "js@gmail.com",
        "alu",
        "98675849949"
      ]
    },
    {
      "cells": [
        "thamizh",
        "selvan",
        "js@gmail.com",
        "alu",
        "98675849949"
      ]
    },
    {
      "cells": [
        "senthamizh",
        "selvan",
        "js@gmail.com",
        "alu",
        "98675849949"
      ]
    },
    {
      "cells": [
        "thamizh",
        "anbu",
        "js@gmail.com",
        "alu",
        "98675849949"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_filling_up_all_the_details_with_two_dim_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_will_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/AddTariff.feature");
formatter.feature({
  "name": "Tariff plan of the new customer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Tariff plan with one dim list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User launch the telecom site",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffSteps.user_launch_telecom_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on Add Tariff Plan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffSteps.user_Click_on_Add_Tariff_Plan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filling up all the details of the tariff plan with one dim list",
  "rows": [
    {
      "cells": [
        "300",
        "200",
        "299",
        "288",
        "288",
        "22",
        "2"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.user_filling_up_all_the_details_of_the_tariff_plan_with_one_dim_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffSteps.user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be displayed with congratulation message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.user_will_be_displayed_with_congratulation_message()"
});
formatter.result({
  "status": "passed"
});
});