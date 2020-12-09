@currencyCloud
Feature: Payment API

  Background:
    Given I logged CurrentCloud api by using "login_id" and "api_key"
    When I get the Auth_Token from api
    Then status code should be 200

  @positive
  Scenario Outline: selling GBP and buying USD using the sell side <type>

    Then I set REST API url with "payment_endpoint"
    When I sell and buy money by using "<buy_currency>"  ,"<sell_currency>" ,"<fixed_side>" ,"<amount>" with "X-Auth-Token"
    Then status code should be 200
    And verify that "client_buy_amount" is correct
    And end the payment API session
    Then status code should be 200


    Examples:
      | type                                       | buy_currency | sell_currency | fixed_side | amount      |
      | minimum amount                             | USD          | GBP           | sell       | 1           |
      | valid amount                               | USD          | GBP           | sell       | 8000        |
      | valid amount                               | USD          | GBP           | buy        | 5000        |
      | case sensitive check for buy/sell currency | UsD          | gbP           | sell       | 1000        |
      | maximum amount                             | USD          | GBP           | sell       | 10000000.00 |


  @negative
  Scenario Outline: selling GBP and buying USD using the sell side <type>

    Then I set REST API url with "payment_endpoint"
    When I sell and buy money by using "<buy_currency>"  ,"<sell_currency>" ,"<fixed_side>" ,"<amount>" with "X-Auth-Token"
    Then status code should be 400
    And verify that response error message is "<error_message>" related with "<message_type>"
    Then end the payment API session
    Then status code should be 200


    Examples:
      | type                        | buy_currency | sell_currency | fixed_side | amount      | message_type  | error_message                                                                                                                       |
      | less than minimum amount    | USD          | GBP           | sell       | 0           | amount        | amount can not be smaller than 1                                                                                                    |
      | negative amount             | USD          | GBP           | sell       | -1000       | amount        | amount should be of numeric type                                                                                                    |
      | 3 digit decimal amount      | USD          | GBP           | sell       | 1000.000    | base          | GBP only supports up to 2 decimal places                                                                                            |
      | blank buy_currency          |              | GBP           | sell       | 1000        | buy_currency  | buy_currency is in invalid format                                                                                                   |
      | blank sell_currency         | USD          |               | sell       | 1000        | sell_currency | sell_currency is in invalid format                                                                                                  |
      | blank fixed_side            | USD          | GBP           |            | 1000        | fixed_side    | fixed_side should be in range: sell, buy                                                                                            |
      | Upper_case fixed_side       | USD          | GBP           | SELL       | 1000        | fixed_side    | fixed_side should be in range: sell, buy                                                                                            |
      | invalid format of amount    | USD          | GBP           | sell       | 10,000.00   | amount        | amount should be of numeric type                                                                                                    |
      | greater than maximum amount | USD          | GBP           | sell       | 10000000.01 | base          | Sorry, the online client pricing for the amount of the currency pair you are trying to trade has not been setup - please contact us |

