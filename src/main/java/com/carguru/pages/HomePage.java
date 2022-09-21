package com.carguru.pages;

import com.carguru.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='uhf-menu-wrapper']/div[1]/ul[1]/li[1]/a[1]")
    WebElement hovertab;

    public void MouseHoverBuySellTab()
    {
        mouseHoverToElement(hovertab);
    }
}
/*@CacheLookup //AssertDealers
    @FindBy(className = "dealerListing--name")
    List<WebElement> dealersname;

    public void verifyDealersNamesDisplayed(boolean list) {
        for (WebElement name : dealersname) {
            if (list = name.isDisplayed()) {
                break;
            } else {
                System.out.println("Dealers name not in the list");
            }
        }
    }
    @And("^I should see the dealers name \"([^\"]*)\" are displayed on page$")
    public void iShouldSeeTheDealersNameAreDisplayedOnPage(Boolean dealr) {
        new FindDealersPage().verifyDealersNamesDisplayed(dealr);
    }*/