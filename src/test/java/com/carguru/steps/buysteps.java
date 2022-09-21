package com.carguru.steps;

import com.carguru.pages.CarSearch;
import com.carguru.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class buysteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on buy\\+sell tab$")
    public void iMouseHoverOnBuySellTab() {

        new HomePage().MouseHoverBuySellTab();

    }

    @And("^I click Search car link$")
    public void iClickSearchCarLink() {
        new CarSearch().ClickOnSearch();

    }
    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) throws InterruptedException {

        new CarSearch().SelectMake(make);
        Thread.sleep(1000);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) throws InterruptedException {
        new CarSearch().SelectModel(model);
        Thread.sleep(1000);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) throws InterruptedException {

        new CarSearch().SelectLocation(location);
        Thread.sleep(1000);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) throws InterruptedException {

        new CarSearch().SelectPrice(price);
        Thread.sleep(1000);
    }

    @And("^I click on find my next car tab$")
    public void iClickOnFindMyNextCarTab() {

        new CarSearch().ClickFind();

    }

    @Then("^I should see the make \"([^\"]*)\" in results\\.$")
    public void iShouldSeeTheMakeInResults(String text)
    {
        Assert.assertTrue(new CarSearch().resultverify().contains(text));
    }

    @Then("^I navigate to \"([^\"]*)\"$")
    public void iNavigateTo(String searchpage)
    {
        Assert.assertEquals(searchpage,new CarSearch().VerifySearchPage());
    }
}
