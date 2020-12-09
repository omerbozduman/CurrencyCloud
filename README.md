CurrencyCloud Payment API Rest Service Testing Exercise / Instructions
Codes and Tests Prepared by:
Omer BOZDUMAN

Software Development in Test / Electrical&Electronic Engineer

omer.bozduman@yahoo.com

https://www.linkedin.com/in/omer-bozduman/

- Build Tool: Maven 
- Dependencies : RestAssured , Cucumber J-Unit, Cucumber Java

- Test Framework: Cucumber BBD (with Junit Assertions)

Api Swagger:
https://www.currencycloud.com/developers/overview/

Api REST BaseURI :
https://devapi.currencycloud.com/v2/

Endpoint for Test:
auth_endpoint =authenticate/api
payment_endpoint=rates/detailed
endsession_endpoint=authenticate/close_session

QA:
Currencycloud has delivered a new Payments API. This API allows users to create new payment records,
amend details after submission, search for existing payments, and delete payment records as required.
The API returns JSON responses and performs error handling in the event of an invalid request taking place.

Acceptance Criteria:
● Authenticate against the API and retrieve a login token
● Create a quote for Selling GBP and buying USD using the sell side
● Verify the buy amount is correct to the rate Create another quote but perform a
negative assertion
● End the API Session

System Requirements:
Java 8+ SDK
Test RUN

Notes: To run all Scenarios, use @currenyCloud , to run positive scenario use @positive,
to run negative scenario use @negative tag in the CukesRunner class/Cucumber Options

Cucumber Test Feature Scenarios:
Positive Scenario
1) I logged the CurrentCloud BaseURI with valid credentials
2) I retrieve a login token by using POST request with "valid credentials" and "auth_endpoint"
3) I test sell/buy GBP and sell/buy USD by using GET request with below parameters and "payment_endpoint"
   a- I validate all positive test cases by using TDD(Scenario-Outline and Examples) by Boundary Value Analysis
   b- Parameters;
   - buy_currency
   - sell_currency
   - fixed_side
   - amount
   - X-Auth-Token
   c- To run separately this scenario, use the @positive tag in the CukesRunner class/Cucumber Options
4- I end the CurrenyCloud Payment API session by using POST request with "endSession_endpoint"

Note: I execute, retrieve token step in step definition because I want to show all steps. It depends 
the application but normally I should put this step in Hooks class under @Before tag.
Also I execute end API session in Hooks class under @After tag.

Negative Scenario
1) I logged the CurrentCloud BaseURI with valid credentials
2) I retrieve a login token by using POST request with "valid credentials" and "auth_endpoint"
3) I test sell/buy GBP and sell/buy USD by using GET request with below parameters and "payment_endpoint"
   a- I validate all negative test cases by using TDD(Scenario-Outline and Examples) by Boundary Value Analysis
   and Equivalence Class Partitioning
   b- Parameters;
   - buy_currency
   - sell_currency
   - fixed_side
   - amount
   - X-Auth-Token
   c- To run separately this scenario, use the @positive tag in the CukesRunner class/Cucumber Options
4- I end the CurrenyCloud Payment API session by using POST request with "endSession_endpoint"

Note: I execute, retrieve token and end API session steps in step definition because I want to show all steps.
It depends through the application but normally I should put this step in Hooks class under @Before and @After tag.
Also I keep these two steps in Hooks class under @Before and @After tag but I hide them.
If you want to see you can execute test scenarious through these methods.
