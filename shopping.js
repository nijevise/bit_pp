// /In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all code written in the file follows strict mode.

// Create an anonymous immediately-invoking function that will hold the main execution of all program calls. Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ in the console.


// Create constructor functions with properties representing the following “things”:
// Product - product id (random number of 5 digits generated on every product creation), name, price (with 2 decimal places), expiration date
// ShoppingBag - a list of products (initially empty; function constructor does not have any input parameters)

// Add getInfo method to Product. It should return a formatted string containing product code (the first and last letter of the name together with the product id), name and price.
// "Banana" -> BA32784, Banana, 129.31

// Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. You can add a product to the list only if it has a valid expiration date.  

// Add a method to ShoppingBag that calculates the average product price of products in your product list and prints out this value with the precision of three decimals. 

// Add getMostExpensive method that finds the most expensive product and prints out its info.

// Add calculateTotalPrice method to ShoppingBag that calculates the total price of products in the shopping bag list. 

// Create a constructor function with properties representing the following:

// PaymentCard - account balance (number with 2 decimal places), active or inactive status, valid until date	

// Create checkoutAndBuy function which receives shopping bag and payment card and prints if the purchase is successful or not. Purchase is successful only if the amount on the card is greater or equal to the total price of products in the shopping bag. If there is not enough money, print out the amount that is missing to complete the purchase.

(function () {
    'use strict'

    function Product(productName, productPrice, productExpDate) {
        this.productId = Math.floor(Math.random() * 90000) + 10000;
        this.name = productName;
        this.price = productPrice;
        this.productExpDate = new Date(productExpDate);

        this.getInfo = function () {
            var productCode = this.productName[0].toUpperCase() + this.productName[productName.length - 1].toUpperCase();
            return productCode;
        }
        return this.productId + this.productCode + ', ' + this.productName + ', ' + this.productPrice;
    }

    function ShoppingBag() {
        this.listOfProduct = [],

            this.addProduct = function (product) {
                var date = new Date();
                if (product.productExpDate > date) {
                    this.listOfProduct.push(product)
                } else {
                    console.log('Product Date has expired!')
                }
            }
    }

    var banana = new Product('Banana', 2.56, '01.01.2019');
    var avocado = new Product('Avocado', 4.00, "20/01/2019");
    var jabuka = new Product('Jabuka', 6.25, '30.04.2019');

    console.log(banana)
    console.log(avocado)
    console.log(jabuka)

    var card = new ShoppingBag();
    card.addProduct(banana);
    card.addProduct(avocado);

}());
