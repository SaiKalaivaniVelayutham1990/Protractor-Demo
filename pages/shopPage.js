let shopPage =function(){

    let IphoneXText=element(by.xpath('//h4/a[text()="iphone X"]'));
    let IphoneXAddToCart=element(by.xpath('//a[text()="iphone X"]/following::div/button[text()="Add "]'));
    let checkoutButton=element(by.xpath('//a[contains(text(),"Checkout")]'));
    

this.verifyPageTitle = function(){
    expect(browser.getTitle()).toEqual("ProtoCommerce");
    allure.createStep('Verify Page Title', function(){})();
};

this.clickAddToCart = function(){
    browser.wait(protractor.ExpectedConditions.visibilityOf(IphoneXText), 5000);
    IphoneXAddToCart.click();
    allure.createStep('Click Add to cart button', function(){})();
};

this.clickCheckoutButton = function(){
    browser.wait(protractor.ExpectedConditions.visibilityOf(checkoutButton), 5000);
    checkoutButton.click();
    allure.createStep('Shop Page-Click Ckeckout button', function(){})();
};

};
module.exports = new shopPage();
