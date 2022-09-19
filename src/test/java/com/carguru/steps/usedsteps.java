package com.carguru.steps;

import com.carguru.pages.UserCarSearch;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class usedsteps {

    @And("^I click user click$")
    public void iClickUserClick() {

        new UserCarSearch().ClickOnUsedCar();

    }

    @Then("^I navigate to a \"([^\"]*)\"$")
    public void iNavigateToA(String usedcar)
    {
        Assert.assertEquals(usedcar,new UserCarSearch().VerifyUsedCar());
    }
}
