let checkoutPage =function(){

    let inStockText=element(by.xpath('//*[text()="In Stock"]'));
    let checkoutButton=element(by.xpath('//*[contains(text(),"Checkout")]'));

   
 this.clickCheckoutButton = function(){
    browser.wait(protractor.ExpectedConditions.visibilityOf(checkoutButton), 5000);
    checkoutButton.click();
    allure.createStep('Checkout Page-Click Ckeckout button', function(){})();
};

};

module.exports = new checkoutPage();