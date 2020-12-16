$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/PaymentApi.feature");
formatter.feature({
  "name": "Payment API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@currencyCloud"
    }
  ]
});
formatter.scenarioOutline({
  "name": "selling GBP and buying USD using the sell side \u003ctype\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "I set REST API url with \"payment_endpoint\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I sell and buy money by using \"\u003cbuy_currency\u003e\"  ,\"\u003csell_currency\u003e\" ,\"\u003cfixed_side\u003e\" ,\"\u003camount\u003e\" with \"X-Auth-Token\"",
  "keyword": "When "
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "verify that \"client_buy_amount\" is correct",
  "keyword": "And "
});
formatter.step({
  "name": "end the payment API session",
  "keyword": "And "
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "type",
        "buy_currency",
        "sell_currency",
        "fixed_side",
        "amount"
      ]
    },
    {
      "cells": [
        "minimum amount",
        "USD",
        "GBP",
        "sell",
        "1"
      ]
    },
    {
      "cells": [
        "valid amount",
        "USD",
        "GBP",
        "sell",
        "8000"
      ]
    },
    {
      "cells": [
        "valid amount",
        "USD",
        "GBP",
        "buy",
        "5000"
      ]
    },
    {
      "cells": [
        "case sensitive check for buy/sell currency",
        "UsD",
        "gbP",
        "sell",
        "1000"
      ]
    },
    {
      "cells": [
        "maximum amount",
        "USD",
        "GBP",
        "sell",
        "10000000.00"
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
  "name": "I logged CurrentCloud api by using \"login_id\" and \"api_key\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_logged_CurrentCloud_api_by_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the Auth_Token from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_get_the_Auth_Token_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "selling GBP and buying USD using the sell side minimum amount",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@currencyCloud"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "I set REST API url with \"payment_endpoint\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_set_REST_API_url_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I sell and buy money by using \"USD\"  ,\"GBP\" ,\"sell\" ,\"1\" with \"X-Auth-Token\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.iSellAndBuyMoneyByUsingWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"client_buy_amount\" is correct",
  "keyword": "And "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.verify_that_is_correct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "end the payment API session",
  "keyword": "And "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.endThePaymentAPISession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
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
  "name": "I logged CurrentCloud api by using \"login_id\" and \"api_key\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_logged_CurrentCloud_api_by_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the Auth_Token from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_get_the_Auth_Token_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "selling GBP and buying USD using the sell side valid amount",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@currencyCloud"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "I set REST API url with \"payment_endpoint\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_set_REST_API_url_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I sell and buy money by using \"USD\"  ,\"GBP\" ,\"sell\" ,\"8000\" with \"X-Auth-Token\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.iSellAndBuyMoneyByUsingWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"client_buy_amount\" is correct",
  "keyword": "And "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.verify_that_is_correct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "end the payment API session",
  "keyword": "And "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.endThePaymentAPISession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
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
  "name": "I logged CurrentCloud api by using \"login_id\" and \"api_key\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_logged_CurrentCloud_api_by_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the Auth_Token from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_get_the_Auth_Token_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "selling GBP and buying USD using the sell side valid amount",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@currencyCloud"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "I set REST API url with \"payment_endpoint\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_set_REST_API_url_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I sell and buy money by using \"USD\"  ,\"GBP\" ,\"buy\" ,\"5000\" with \"X-Auth-Token\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.iSellAndBuyMoneyByUsingWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"client_buy_amount\" is correct",
  "keyword": "And "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.verify_that_is_correct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "end the payment API session",
  "keyword": "And "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.endThePaymentAPISession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
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
  "name": "I logged CurrentCloud api by using \"login_id\" and \"api_key\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_logged_CurrentCloud_api_by_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the Auth_Token from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_get_the_Auth_Token_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "selling GBP and buying USD using the sell side case sensitive check for buy/sell currency",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@currencyCloud"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "I set REST API url with \"payment_endpoint\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_set_REST_API_url_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I sell and buy money by using \"UsD\"  ,\"gbP\" ,\"sell\" ,\"1000\" with \"X-Auth-Token\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.iSellAndBuyMoneyByUsingWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"client_buy_amount\" is correct",
  "keyword": "And "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.verify_that_is_correct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "end the payment API session",
  "keyword": "And "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.endThePaymentAPISession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
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
  "name": "I logged CurrentCloud api by using \"login_id\" and \"api_key\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_logged_CurrentCloud_api_by_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the Auth_Token from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_get_the_Auth_Token_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "selling GBP and buying USD using the sell side maximum amount",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@currencyCloud"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "I set REST API url with \"payment_endpoint\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.i_set_REST_API_url_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I sell and buy money by using \"USD\"  ,\"GBP\" ,\"sell\" ,\"10000000.00\" with \"X-Auth-Token\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.iSellAndBuyMoneyByUsingWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"client_buy_amount\" is correct",
  "keyword": "And "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.verify_that_is_correct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "end the payment API session",
  "keyword": "And "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.endThePaymentAPISession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CurrencyCloud.step_definitions.PaymentStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});