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

    function Product(ID,name,price,expDate) {
        this.productId = Math.floor(Math.random() * 90000) + 10000;
        this.name = name;
        this.price = price;
        this.expirationDate = expDate;
        this.getInfo = function () {
            return this.name[0].toUpperCase()+this.name[name.length-1].toUpperCase()+this.prodactID+', '+this.name+', '+this.price;
        }
    }

    function ShoppingBag() {
        this.listOfProduct = [],
        this.addProduct = function (product) {
                var date = new Date();
                if (product.expirationDate > date) {
                    this.listOfProduct.push(product)
                    console.log(prodact.name+" is added to bag");
                } else {
                    console.log("Date has expired")
                }
            };
    
    this.averagePrice = function(){
        var sum = 0;
        for( var i =0; i < this.listOfProduct.length; i++){
            sum += this.listOfProduct[i].price
        }
        return( sum/this.listOfProduct.length).toFixed(3);
    }

    this.getMostExpensive = function(){
        var prices = [];
        var mostExpensive;
        for(var i = 0; i < this.listOfProduct.length; i++){
            prices.push(this.listOfProduct[i].price);
        }
        mostExpensive = Math.max(...prices);
        for (var i = 0; i < this.listOfProduct.length; i++){
            if (this.listOfProduct[i].price == mostExpensive){
                return "The most expencive product in bag is "+this.listOfProduct[i].name+", price: "+this.listOfProduct[i].price;
            }
        }
    }
    this.calculateTotalPrice = function(){
        var totalPrice = 0;
        for( var i = 0; i < this.listOfProduct.length; i++ ){
            totalPrice += this.listOfProduct[i].price;
        }
        return totalPrice;
    }

    function PaymentCard(activeBalace,active,date){
        this.activeBalace = activeBalace;
        this.active = active;
        this.validUntilDate = date;
    }
    function checkoutAndBay(bag,card){
        if(card.activeBalace >= card.activeBalace){
            console.log("Purchase is succesful")
        }
        else{
            console.log("We are missing "+(bag.calculateTotalPrice-card.activeBalace)+" to complete the perchase");
        }
    }


    var banana = new Product('Banana', 2.56, '01.01.2019');
    var avocado = new Product('Avocado', 4.00, "20/01/2019");
    var jabuka = new Product('Jabuka', 6.25, '30.04.2019');

    console.log(banana)
    console.log(avocado)
    console.log(jabuka)
  

}());


