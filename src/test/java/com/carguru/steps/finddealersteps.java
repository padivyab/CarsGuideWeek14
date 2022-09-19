package com.carguru.steps;

import com.carguru.pages.FindDealersSearch;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class finddealersteps {
    @And("^I click find a dealer$")
    public void iClickFindADealer() {

        new FindDealersSearch().ClickOnFindDealer();
    }

    @Then("^I navigate to a to \"([^\"]*)\"$")
    public void iNavigateToATo(String findPage)
    {
        Assert.assertEquals(findPage,new FindDealersSearch().VerifyFindDealerPage());
    }

    @And("^I should see the dealer names \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealerNamesAreDisplayOnPage(String dealer)
    {

        new FindDealersSearch().EnterDealerName(dealer);
    }


    @And("^I click on find button$")
    public void iClickOnFindButton() {
        new FindDealersSearch().ClickOnJobDealer();

    }
}
