/* 

Extending classes in JavaScript allows you to create a new class that inherits properties and methods from an existing class. 
This is useful for sharing features between classes while still allowing for additional functionality or customization in the derived class.

*/

// Base Product class
class Product {
    constructor(name, price, discountable) {
      this.name = name;
      this.price = price;
      this.discountable = discountable;
    }
  
    // Method to check if the product is discountable
    isDiscountable() {
      return this.discountable;
    }
  }
  
  // SaleProduct class extending Product
  class SaleProduct extends Product {
    constructor(name, price, discountable, discountPercentage) {
      super(name, price, discountable); // Call the parent class constructor
      this.discountPercentage = discountPercentage; // Additional property for sale discount
    }
  
    // Method to get the sale price
    getSalePrice() {
      if (super.isDiscountable()) {
        return this.price * ((100 - this.discountPercentage) / 100);
      } else {
        return 0; // or any other default value you want to return when the product is not eligible for a discount
      }
    }
  }
  
  // Create an instance of SaleProduct
  const saleProduct = new SaleProduct("Shirt", 20, true, 10);
  
  // Log the sale price
  console.log(saleProduct.getSalePrice()); // Outputs: 18


  // Step 1: Create the Film class
class Film {
  constructor(id, title, director, releaseYear, genres = []) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genres = genres;
  }

  // Method to add a genre to the film
  addGenre(genre) {
    this.genres.push(genre);
  }

  // Method to get the title of the film
  getFilmTitle() {
    return this.title;
  }
}

// Example 2: Extend the Film class
class DocumentaryFilm extends Film {
  constructor(id, title, director, releaseYear, genres, subject) {
    // Call the parent class constructor
    super(id, title, director, releaseYear, genres);
    this.subject = subject; // Add additional property specific to documentaries
  }

  // Method specific to documentary films
  getSubject() {
    return this.subject;
  }
}

// Step 3: Instantiate the derived class and use its methods
const favoriteDocumentary = new DocumentaryFilm(2, 'Planet Earth', 'Alastair Fothergill', 2006, ['Nature', 'Documentary'], 'Wildlife');

// Add a genre to the documentary
favoriteDocumentary.addGenre('Environmental');

// Get the title of the documentary
console.log(favoriteDocumentary.getFilmTitle()); // Outputs: Planet Earth

// Get the subject of the documentary
console.log(favoriteDocumentary.getSubject()); // Outputs: Wildlife

// Check the documentary details
console.log(favoriteDocumentary);
// Outputs: 
// DocumentaryFilm {
//   id: 2,
//   title: 'Planet Earth',
//   director: 'Alastair Fothergill',
//   releaseYear: 2006,
//   genres: ['Nature', 'Documentary', 'Environmental'],
//   subject: 'Wildlife'
// }

  
// using this on callback function
const isAuth = true;
const user = {
  favorites: []
}

class UserProduct {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(() => {
        this.favoriteProduct();
      }, 1000)
    } else {
      console.log('You must be authenticated to favorite the products');
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name)
    console.log(`${this.name} added to favorites`)
  }


}

const product1 = new UserProduct('Phone', 500);
product1.handleFavoriteProduct(); // Phone added to favorites


// defining favoriteProduct as an arrow function inside the constructor
class UserProduct2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.favoriteProduct = () => {
      user.favorites.push(this.name)
      console.log(`${this.name} added to favorites`)
    }
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(() => {
        this.favoriteProduct();
      }, 2000)
    } else {
      console.log('You must be authenticated to favorite the products');
    }
  }
}

const product2 = new UserProduct2('Laptop', 2000);
product2.handleFavoriteProduct(); // Laptop added to favorites

// using '.bind(this)' to bind the context of the class to the callback function
class UserProduct3 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.favoriteProduct = this.favoriteProduct.bind(this);
  
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct, 3000)
    } else {
      console.log('You must be authenticated to favorite the products');
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name)
    console.log(`${this.name} added to favorites`)
  }
}

const product3 = new UserProduct3('Tablet', 300);
product3.handleFavoriteProduct(); // Tablet added to favorites