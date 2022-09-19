package com.carguru.pages;

import com.carguru.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CarSearch extends Utility {

    private static final Logger log = LogManager.getLogger(CarSearch.class.getName());

    public CarSearch() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@href='/buy-a-car/new-and-used-car-search']")
    WebElement search;

    @CacheLookup
    @FindBy(xpath = "//div[@class='heading main-heading item-ad-wrapper ']/h1[1]")
    WebElement verifySearch;

    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeDropdown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement modelDropdown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement locationDropdown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement pricedropDown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement clickfind;
    public void ClickOnSearch()
    {
        clickOnElement(search);
    }
    public String VerifySearchPage()
    {
        return getTextFromElement(verifySearch);
    }
    public void SelectMake(String make)
    {
        selectByVisibleTextFromDropDown(makeDropdown,make);
    }
    public void SelectModel(String model)
    {
        selectByVisibleTextFromDropDown(modelDropdown,model);
    }
    public void SelectLocation(String location)
    {
        selectByVisibleTextFromDropDown(locationDropdown,location);
    }
    public void SelectPrice(String price)
    {
        selectByVisibleTextFromDropDown(pricedropDown,price);
    }
    public void ClickFind()
    {
        clickOnElement(clickfind);
    }
}
