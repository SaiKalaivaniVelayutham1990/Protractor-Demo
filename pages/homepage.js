let homepage =function(){

    let nameInput=element(by.xpath('//input[@name="name"]'));
    let emailInput=element(by.xpath('//input[@name="email"]'));
    let passwordInput=element(by.id('exampleInputPassword1'));
    let submitButton=element(by.xpath('//input[@type="submit"]'));
    let successMessage=element(by.xpath('//a[@class="close"]/following-sibling::strong'));
    let dynamicTextBox = element(by.xpath('//h4/input[@type="text"]'));
    let shopNavLink = element(by.linkText('Shop'));
      
  
    this.getUrl = function(url){
        browser.get(url);
        allure.createStep('Launch Url ', function(){})();
    };

    this.enterName = function(name){
        browser.wait(protractor.ExpectedConditions.visibilityOf(nameInput), 5000);
        nameInput.sendKeys(name);
        allure.createStep('Enter Name', function(){})();
        
    };

    this.enterEmail = function(email){
        emailInput.sendKeys(email);
        allure.createStep('Enter Email', function(){})();
    };

    this.enterPassword = function(pwd){
        passwordInput.sendKeys(pwd);
        allure.createStep('Enter Password', function(){})();
    };

    this.clickSubmit = function(){
        submitButton.click();
        allure.createStep('Click Submit button', function(){})();
    };
    this.verifySuccessSubmit = function(success){
          expect(successMessage.getText()).toEqual(success);
          allure.createStep('Validate Success Message', function(){})();
        
    };

    this.verifyTextInBindingTextBox = function(){
        browser.wait(protractor.ExpectedConditions.visibilityOf(dynamicTextBox), 5000);
        expect(dynamicTextBox.getText()).toEqual(nameInput.getText());
        allure.createStep('Validate Value in Binding TextBox', function(){})();
      
  };

  this.clickShopNavLink = function(){
    shopNavLink.click();
    allure.createStep('Clcik on the Shop Link in top Menu', function(){})();
};

};
module.exports = new homepage();