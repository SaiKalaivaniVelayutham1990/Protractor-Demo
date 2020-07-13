let deliveryLocationPage = require ('../pages/deliveryLocationPage')

describe("Order Page", function() {

    it("Enter Location and Check Order Success", function() {

        deliveryLocationPage.enterLocation("Fin");
        deliveryLocationPage.clickPurchaseButton();
        deliveryLocationPage.verifySuccessMesssage("Success! Thank you! Your order will be delivered in next few weeks :-).");
    });
    
  });