/* 

callbacks -> promises

states of a promise:
- pending
- resolved/fulfilled
- rejected

const promise = new Promise((resolve, reject) => {
   setTimeout(() => resolve('done!'), 1000);
});

promise.then(() => {}).catch(() => {});
promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally(() => console.log('done'));

when resolve is called the code will execute the function passed on then method
when reject is called the code will execute the function passed on catch method

Eg: 
const navigationPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
        resolve(position);
    }, error => {
        reject(error);
    })
})

***shorter syntax***
const navigationPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve(position), reject(position))
})

navigationPromise
.then(position => console.log(position))
.catch(error => console.error(error))
.finally(() => console.log('done')



Make network requests with fetch()

API - Application Programming Interface: Software to communicate with other software
REST - Representational State Transfer: Architecture style for designing networked applications
JSON - JavaScript Object Notation: Lightweight data-interchange format
AJAX - Asynchronous JavaScript And XML: Set of web technologies to send and receive data from a client
CRUD - Create, Read, Update, Delete: Operations to perform on data
HTTP - Hypertext Transfer Protocol: Protocol for sending data across the web
URL - Uniform Resource Locator: Address for a resource on the web
API Endpoint: URL for making API requests
Query Parameters: Additional data sent to server
Request Body: Data sent to server
Response Body: Data sent from server
HTTP Headers: Additional information sent with a request or response
Authentication: Security measure to verify identity
REST API: API that follows REST architecture
HTTP Method: Type of CRUD operation
GET: Read
POST: Create
PUT: Update
DELETE: Delete
Status Code: Number that indicates the status of a request
200: OK
201: Created
400: Bad Request
401: Unauthorized
403: Forbidden
404: Not Found
500: Internal Server Error
CORS - Cross-Origin Resource Sharing: Security measure to prevent unauthorized requests from another domain
JSON Server: Fake REST API for testing and prototyping
Fetch API: Modern interface for fetching resources
Async/Await: Syntactic sugar for writing asynchronous code
Promise: Object representing the eventual completion or failure of an asynchronous operation
.then(): Method to handle a resolved promise
.catch(): Method to handle a rejected promise
finally(): Method to execute code after a promise is settled
async: Keyword to create an asynchronous function
await: Keyword to pause execution until a promise is settled
try/catch: Statement to handle errors in synchronous code
Headers: Constructor for creating HTTP headers


*/

//  GET /posts/1 - single blog post
fetch('https://jsonplaceholder.typicode.com/posts/2')
  .then(response => response.json())
  .then(data => console.log(data))


// GET /users/3 - single user
fetch('https://jsonplaceholder.typicode.com/users/3')
  .then(response => response.json())
  .then(data => console.log(data.name))


fetch("https://jsonplaceholder.typicode.com/users/3")
  .then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }
      return response.json();
  })
  .then(person => {
      console.log(`${person.name} works for ${person.company.name}`);
  })
  .catch(err => console.log(err));



//  POST /posts - create a new blog post
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'My awesome post',
//         body: 'Some content',
//         userId: 1
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     })
//     .then(response => {// GET /users/3 - single user
//         response.ok ? response.json() : Promise.reject(response)
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));



//  async-await
async function getBlogPost() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('blog post'), 1000)
    })

    await promise
      .then(value => console.log(value))
      .finally(() => console.log('done first round'))
}

getBlogPost()

//  another option
async function fetchPost() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('blog post'), 1000)
    })

    const result = await promise
    console.log(result)
    console.log('done second round')
}

//  recommended way
async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/3')
    const data = await response.json()
    console.log(data)
}

getPost()


// catch errors with async-await
async function runAsync() {
    try {
        await Promise.reject(Error('oops'))
    } catch (error) {
        console.error(error)
    }
}

runAsync()

// Another option
async function runasync() {
    return await Promise.reject(Error('Oops'))
}

runasync().catch(error => console.error(error))


//  async-await with fetch
async function getGithubUser() {
    try {
        const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk')
        if (!response.ok) {
            throw new Error(response.status)
        }
    } catch (error) {
        console.log('Could not fetch user, try again later.')
        console.error(error)
    }

}

getGithubUser()


async function getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
      if(!response.ok) {
        throw new Error(response.status)
      }
    } catch (err) {
      console.log(err, 'Could not fetch user, try again later!')
    }
  }
  
  getUser()
    
  