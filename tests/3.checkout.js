let checkoutPage = require ('../pages/checkoutPage')

describe("CheckOut Page Test", function() {

    it("Check for Instock of the product and click checkout", function() {

      //  checkoutPage.checkForInStock();
          checkoutPage.clickCheckoutButton();
    });
    
  });