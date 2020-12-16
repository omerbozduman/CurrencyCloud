package com.CurrencyCloud.step_definitions;

import com.CurrencyCloud.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class PaymentStepDefs {

    Response response;
    String auth_token;
    String endPoint;


    @Given("I logged CurrentCloud api by using {string} and {string}")
    public void i_logged_CurrentCloud_api_by_using_and(String login_id, String api_key) {

        //second way
//        Map<String , Object> request = new HashMap<>();
//        request.put("login_id",ConfigurationReader.get(login_id));
//        request.put("api_key",ConfigurationReader.get(api_key));
//        response= given().accept(ContentType.JSON)
//                .formParams(request)
//                .post(ConfigurationReader.get("auth_endpoint"));


        response=given().
                contentType("multipart/form-data")
                .multiPart("login_id", ConfigurationReader.get(login_id))
                .multiPart("api_key", ConfigurationReader.get(api_key))
                .post(ConfigurationReader.get("auth_endpoint"));

    }

    @When("I get the Auth_Token from api")
    public void i_get_the_Auth_Token_from_api() {
        auth_token = response.path("auth_token");

    }

    @Then("status code should be {int}")
    public void status_code_should_be(int status_code) {
        Assert.assertEquals("verify status code" , status_code,response.statusCode());
    }

    @Then("I set REST API url with {string}")
    public void i_set_REST_API_url_with(String endPoint) {

        this.endPoint =ConfigurationReader.get(endPoint);
    }


    @When("I sell and buy money by using {string}  ,{string} ,{string} ,{string} with {string}")
    public void iSellAndBuyMoneyByUsingWith(String buyCurrency, String sellCurrency, String fixedSide, String amount, String token) {

        Map<String , Object> bodyData = new HashMap<>();
        bodyData.put("buy_currency",buyCurrency);
        bodyData.put("sell_currency",sellCurrency);
        bodyData.put("fixed_side",fixedSide);
        bodyData.put("amount",amount);

     //   auth_token=Hooks.auth_token;

        response=given().accept(ContentType.JSON).header(token,auth_token).
//                queryParams("buy_currency",buyCurrency).
//                queryParams("sell_currency",sellCurrency).
//                queryParams("fixed_side",fixedSide).
//                queryParams("amount",amount).
                queryParams(bodyData).
                when().
                get(endPoint);
    }

    @Then("verify that {string} is correct")
    public void verify_that_is_correct(String client_buy_amount) {

        DecimalFormat  df = new DecimalFormat("##.##");

        Double sellAmount = response.jsonPath().getDouble("client_sell_amount");
        sellAmount =Double.parseDouble(df.format(sellAmount));
        Double rate = response.jsonPath().getDouble("client_rate");
        Double buyAmount = response.jsonPath().getDouble(client_buy_amount);
        buyAmount =Double.parseDouble(df.format(buyAmount));
        Double totalAmount = sellAmount*rate;
        totalAmount=Double.parseDouble(df.format(totalAmount));

        Assert.assertEquals("verify that client buy amount is correct",totalAmount,buyAmount);

        // second way
//        Map<String,String> paymentData = response.as(Map.class);
//        Double clientBuyAmount = Double.parseDouble(df.format(Double.parseDouble(paymentData.get("client_buy_amount"))));
//        Double clientSellAmount = Double.parseDouble(df.format(Double.parseDouble(paymentData.get("client_sell_amount"))));
//        Double clientRate = Double.parseDouble(paymentData.get("client_rate"));
//        Double totalMoney = Double.parseDouble(df.format(clientRate*clientSellAmount));
//
//        Assert.assertEquals(totalMoney,clientBuyAmount);

        // third way
//        BigDecimal data = new BigDecimal(response.jsonPath().getString("client_sell_amount"));
//        BigDecimal rate1 = new BigDecimal(response.jsonPath().getString("client_rate"));
//        BigDecimal total = data.multiply(rate1);
//        System.out.println("total = " + total);
//        total= total.setScale(2, RoundingMode.HALF_DOWN);
//        System.out.println("total = " + total);
//        BigDecimal buy = new BigDecimal(response.jsonPath().getString(client_buy_amount));
//        System.out.println("buy = " + buy);
//        Assert.assertEquals("verify that client buy amount is correct",total,buy);


    }

    @And("verify that response error message is {string} related with {string}")
    public void verifyThatResponseErrorMessageIsRelatedWith(String errorMessage, String messageType) {
        String key = "error_messages." + messageType +"[0].message";
        String actualErrorMessage = response.jsonPath().get(key);
        Assert.assertEquals("verify response error message",errorMessage,actualErrorMessage);

    }

    @Then("end the payment API session")
    public void endThePaymentAPISession() {

        response = given().header("X-AUTH-TOKEN", auth_token).
                post(ConfigurationReader.get("endsession_endpoint"));

    }
}
