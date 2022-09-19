package com.carguru.pages;

import com.carguru.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FindDealersSearch extends Utility {

    private static final Logger log = LogManager.getLogger(FindDealersSearch.class.getName());

    public FindDealersSearch() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='dealer-heading row']/h1[1]")
    WebElement verifyfinddealer;

    @CacheLookup
    @FindBy(xpath = "//div[@class='uhf-menu-wrapper']/div[1]/ul[1]/li[1]/div[1]/div[1]/div[1]/ul[1]/li[4]/a[1]")
    WebElement clickfinddealer;

    @CacheLookup
    @FindBy(xpath = "//input[@id='keyword']")
    WebElement enterName;

    @CacheLookup
    @FindBy(xpath = "//a[@id='dealer-search-submit']")
    WebElement jobdealer;
    public String VerifyFindDealerPage()
    {
        return getTextFromElement(verifyfinddealer);
    }
    public void ClickOnFindDealer()
    {
        clickOnElement(clickfinddealer);
    }
    public void EnterDealerName(String dealer)
    {
        sendTextToElement(enterName,dealer);
    }
    public void ClickOnJobDealer()
    {
        clickOnElement(jobdealer);
    }
}
