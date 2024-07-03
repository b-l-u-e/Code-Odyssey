/* 

DOM - Document Object Model
document property is an object that represents all the html document as objects that can be modified by javascript.
DOM is a programming interface for web documents. It represents the structure of the document as a tree of objects.

document.getElementById('id') - returns an element with the specified id.
document.getElementsByClassName('class') - returns a collection of elements with the specified class name.
document.getElementsByTagName('tag') - returns a collection of elements with the specified tag name.
document.querySelector('selector') - returns the first element that matches the specified selector.
document.querySelectorAll('selector') - returns a collection of elements that matches the specified selector.

document.createElement('tag') - creates a new element with the specified tag name.
document.createTextNode('text') - creates a new text node with the specified text.
element.appendChild(child) - appends a child to the element.

element.innerHTML - sets or returns the html content of an element.
element.innerText - sets or returns the text content of an element.
element.style.property - sets or returns the css style of an element.

element.addEventListener('event', function) - attaches an event listener to the element.
element.removeAttribute('attribute') - removes the specified attribute from the element.
element.setAttribute('attribute', 'value') - sets the value of the specified attribute.

element.classList.add('class') - adds a class to the element.
element.classList.remove('class') - removes a class from the element.

element.classList.toggle('class') - toggles between adding and removing a class from the element.
element.classList.contains('class') - returns true if the element contains the specified class.

element.classList.replace('old', 'new') - replaces the specified class with a new class.

element.classList.item(index) - returns the class name at the specified index.
element.classList.length - returns the number of classes in the element.

element.classList.forEach(function) - calls a function for each class in the element.
element.classList.entries() - returns an iterator object that contains the key/value pairs for each class in the element.

element.classList.keys() - returns an iterator object that contains the keys for each class in the element.
element.classList.values() - returns an iterator object that contains the values for each class in the element.

element.classList[Symbol.iterator]() - returns an iterator object that contains the key/value pairs for each class in the element.

element.classList.toString() - returns a string representation of the class list.
element.classList.valueOf() - returns the class list as an object value.


*/

console.log(document.body); // <body>...</body>