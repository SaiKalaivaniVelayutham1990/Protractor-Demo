let deliveryLocationPage =function(){


    let locationInputBox=element(by.id('country'));
    let purchaseButton=element(by.xpath('//*[@type="submit"]'));
    let orderSuccessMessage=element(by.className('alert alert-success alert-dismissible'));
    let suggestedCountry=element(by.xpath('//div[@class="suggestions"]//following::a'));

   

    this.enterLocation = function(location){
        browser.wait(protractor.ExpectedConditions.visibilityOf(locationInputBox), 5000);
        locationInputBox.sendKeys(location);
        allure.createStep('Enter Location', function(){})();
        suggestedCountry.click();
        allure.createStep('Click Suggested Value', function(){})();

    };

 this.clickPurchaseButton = function(){
    browser.wait(protractor.ExpectedConditions.visibilityOf(purchaseButton), 5000);
    purchaseButton.click();
    allure.createStep('Click purchase button', function(){})();
};

this.verifySuccessMesssage= function(success){
    expect(orderSuccessMessage.getText()).toEqual(success);
    allure.createStep('Validate Order Success Message', function(){})();
  
};

};

module.exports = new deliveryLocationPage();