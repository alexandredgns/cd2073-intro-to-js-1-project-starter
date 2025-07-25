/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const cherry = {
  name : "Cherries",
  price : 4,
  quantity : 0,
  productId : 100,
  image : "images/cherry.jpg"
}

const orange = {
  name : "Oranges",
  price : 10,
  quantity : 0,
  productId : 200,
  image : "images/orange.jpg"
}

const strawberry = {
  name : "Strawberries",
  price : 15,
  quantity : 0,
  productId : 300,
  image : "images/strawberry.jpg"
}

products.push(cherry);
products.push(orange);
products.push(strawberry);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
function isInCart(productId) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      return true;
    }
  }
  return false;
}

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  
  switch (productId) {
  case cherry.productId:
    if (!isInCart(cherry.productId)) {
      cart.push(cherry);
      cherry.quantity = 1;
    } else {
      cherry.quantity += 1;
    }
    break;
  case orange.productId:
    if (!isInCart(orange.productId)) {
      cart.push(orange);
      orange.quantity = 1;
    } else {
      orange.quantity += 1;
    }
    break;
  case strawberry.productId:
    if (!isInCart(strawberry.productId)) {
      cart.push(strawberry);
      strawberry.quantity = 1;
    } else {
      strawberry.quantity += 1;
    }
    break;
  default:
    break;
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  if (productId === cherry.productId) {
    cherry.quantity += 1;
  } else if (productId === orange.productId) {
    orange.quantity += 1;
  } if (productId === strawberry.productId) {
    strawberry.quantity += 1;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  if (productId === cherry.productId) {
    cherry.quantity -= 1;
    if(cherry.quantity === 0) {
      removeProductFromCart(productId);
    }
  } else if (productId === orange.productId) {
    orange.quantity -= 1;
    if (orange.quantity === 0) {
      removeProductFromCart(productId);
    }
  } else if (productId === strawberry.productId) {
    strawberry.quantity -= 1;
    if (strawberry.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/ 
function removeProductFromCart(productId) {
  let index = -1;
  //finding where the product is
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      index = i;
      break;
    }
  }
  //removing from the given index
  if (index != -1) {
    cart[index].quantity = 0;
    cart.splice(index, 1);
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
//creating global variable
let totalPaid = 0;

function cartTotal() {
  let cartTotal = 0;
  cart.forEach(function(product) {
    cartTotal += product.price * product.quantity;
  });
  return cartTotal;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.forEach(product => {
    removeProductFromCart(product.productId);
  });
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(amount) {
  totalPaid += amount;
  let remainingBalance = totalPaid - cartTotal()
  if (remainingBalance >= 0) {
    totalPaid = 0;
    emptyCart();
  }
  return remainingBalance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
