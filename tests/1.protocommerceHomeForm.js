let homepage = require ('../pages/homepage')


describe("Home Form Test", function() {

    it("Enter details in the form and submit", function() {
        homepage.getUrl('https://qaclickacademy.github.io/protocommerce/');
        homepage.enterName('Sai');
        homepage.enterEmail('Sai@gmail.com');
        homepage.enterPassword('azsxdc');
        homepage.clickSubmit();
    });
    it("Validation After Submit", function() {
        homepage.verifyTextInBindingTextBox();
        homepage.verifySuccessSubmit('Success!');
    });
  });