/* 

Class field proposal also know as the public instance fields" proposal
is a stage 3 proposal that allows you to define fields directly in the class body.

Key Features of the Class Field Proposal

    Public Instance Fields:
        You can define properties directly within the class body.
        These properties are automatically assigned to instances of the class.

    Default Values:
        You can assign default values to the fields directly within the class body.

    Class Methods:
        You can still define methods as usual.

*/

class Product {
    // Public instance fields
    name = '';
    price = 0;
    discountable = false;
  
    // Constructor (optional)
    constructor(name, price, discountable) {
      this.name = name;
      this.price = price;
      this.discountable = discountable;
    }
  
    // Method to check if the product is discountable
    isDiscountable() {
      return this.discountable;
    }
  
    // Method to add the product to favorites
    favoriteProduct() {
      user.favorites.push(this.name);
      console.log(`${this.name} favorited!`);
    }
  
    // Method to handle favoriting the product
    handleFavoriteProduct() {
      if (isAuth) {
        setTimeout(() => this.favoriteProduct(), 1000);
      } else {
        console.log("You must be signed in to favorite products!");
      }
    }
  }
  
  // Usage
  const user = {
    favorites: []
  };
  const isAuth = true;
  
  const product1 = new Product('Coaster', 89.99, true);
  product1.handleFavoriteProduct(); // After 1 second, logs: Coaster favorited!

  
//   without constructor

class Product2 {
    // Public instance fields with default values
    name = 'Unknown Product';
    price = 0;
    discountable = false;
  
    // Method to check if the product is discountable
    isDiscountable() {
      return this.discountable;
    }
  
    // Method to add the product to favorites
    favoriteProduct() {
      user.favorites.push(this.name);
      console.log(`${this.name} favorited!`);
    }
  
    // Method to handle favoriting the product
    handleFavoriteProduct() {
      if (isAuth) {
        setTimeout(() => this.favoriteProduct(), 1000);
      } else {
        console.log("You must be signed in to favorite products!");
      }
    }
  }
  
  // Usage
  const user2 = {
    favorites: []
  };
  const isAuth2 = true;
  
  const product2 = new Product2();
  console.log(product1.name); // Outputs: Unknown Product
  product1.handleFavoriteProduct(); // After 1 second, logs: Unknown Product favorited!


  
/*

implementation uses the class field syntax to define handleFavoriteProduct and favoriteProduct as arrow functions directly within the class body. 
This approach ensures that this is correctly bound to the instance of the class.

*/

const isAuth3 = true;
const user3 = {
  favorites: []
};

class Product3 {

    name = 'Unknown Product';
    price = 0;
    discountable = false;


//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

  // Arrow function defined as a class field
  handleFavoriteProduct = () => {
    if (isAuth) {
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  // Arrow function defined as a class field
  favoriteProduct = () => {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

// Create an instance of Product
const product3 = new Product3('Coaster', 89.99);
product1.handleFavoriteProduct(); // After 1 second, logs: Coaster favorited!


/* 
Benefits of Using Class Fields

1: Simplified Syntax: Defining methods as class fields with arrow functions makes the code more concise and avoids the need for explicit binding.

2: Correct this Binding: Arrow functions ensure that this is correctly bound to the instance, reducing potential issues with this context in callback functions.

3: Modern JavaScript: This approach aligns with modern JavaScript practices and leverages ES6+ features for cleaner and more maintainable code.


*/
