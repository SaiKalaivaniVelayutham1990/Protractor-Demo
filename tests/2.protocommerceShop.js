let homepage = require ('../pages/homepage')
let shopPage = require ('../pages/shopPage')

describe("Shop Page Test", function() {

    it("Navigation to shop Page from home Page", function() {

        homepage.clickShopNavLink();
        shopPage.verifyPageTitle();
    });

    it("Check for IphoneX and Add to cart", function() {

         shopPage.clickAddToCart();
    });

    it("Checkout for IphoneX ", function() {

        shopPage.clickCheckoutButton();
   });
    
  });