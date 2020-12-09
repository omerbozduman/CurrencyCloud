package com.CurrencyCloud.step_definitions;

import com.CurrencyCloud.utilities.ConfigurationReader;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class Hooks {

  //  Response response;
  //  public static String auth_token;
    @Before
    public void setUp() {
        RestAssured.baseURI = ConfigurationReader.get("BaseURI");

//        response=given().
//                contentType("multipart/form-data")
//                .multiPart("login_id", ConfigurationReader.get("login_id"))
//                .multiPart("api_key", ConfigurationReader.get("api_key"))
//                .post(ConfigurationReader.get("auth_endpoint"));
//        System.out.println("response.statusCode() = " + response.statusCode());
//        Assert.assertEquals(200,response.statusCode());
//
//        auth_token = response.path("auth_token");
    }

    @After
    public void endAPISession(){

//        response = given().header("X-AUTH-TOKEN", auth_token).
//                post(ConfigurationReader.get("endsession_endpoint"));
//
//        System.out.println("responseomer.statusCode() = " + response.statusCode());
//        Assert.assertEquals(200,response.statusCode());

    }
}
