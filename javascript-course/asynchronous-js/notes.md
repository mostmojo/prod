# Asynchronous JavaScript

* Synchronous - everything is run in order - top to bottom
* Async - code that can be executed later. Ex. with a timer
* ` setTimeout(() =>
{
    console.log('x');
}, 2000)` - 2nd param milliseconds
* Allow asynchronous functions to run in the 'background';
* We pass in callbacks that run once the function has finished its work
* Move on immediately; Non-blocking!
* We can use async callbacks to defer actions into the future
* `setTimeout()` function lives in Web APIs, outside the JS engine. We have access to them along with DOM Events and XMLHttpRequests()
* Event handlers sit in WEB APIs until they are triggered. They then move into the Message Queue and wait to be executed
* `Event loops` constantly monitor the `execution stack` and push things into it from the `message queue` as soon as the `execution stack` is empty

-----

## Old way &rarr; Async w/ callbacks

* Having a setTimeout() function within another setTimeout() function, chains the two together so one is executed inside the other but only once the first one is called.
* setTimeOut() function also has a 2nd parameter which can be passed into itself. Ex. Pass `recipeIDs[2]` value into `id` param to then log the value with template literals
```
setTimeout((id) => {
    const recipe = { title: 'fresh tomato pasta', publisher: 'Jacob' };
    console.log(`${id}: ${recipe.title} - published by ${recipe.publisher}`);
}, 1000, recipeIDs[2]);
```
* Nested callbacks in AJAX can start to get messy. This is called **Callback hell** - hence, why `promises` were introduced in JS
* **Promise** - keeps track of whether a certain event has happened already or not

-----
## Promises

* Determines what happens after the event has happened (async event)
* Implements the concept of a future value that we're expecting
* Promise states: PENDING &rarr; (EVENT HAPPENS) &rarr; SETTLED/RESOLVED - FULFILLED || REJECTED
* Promises are *produced* and then callbacks can *fulfill* or *reject* data

* **PRODUCING PROMISES**
* `new Promise((resolve, reject) => { ... resolve( x ) });` - Promises have resolve and reject **callback executors**  where `resolve` holds the values of everything that is retrieved from an API for example. `[1, 2, 3]`.

* **CONSUMING PROMISES**
```
x.then(y => {
    console.log(y);
    return z(y[3]);
});
```

* Any values from the above resolve method are stored in the parameter after `.then` and can be logged, returned, etc.

* The `resolve()` method is used when the action was successful, and we want to resolve some data. On the other hand, the `reject()` method is used when the action has failed, so for example if there was an error, and we want to pass this error, so the `catch()` method can catch it and report an error.

-----

## Async / Await

* Promises need to be consumed most of the time, so async/await helps do that
* `async` before a function means one simple thing: a function always returns a `promise`.
* The keyword `await` makes JavaScript wait until that promise settles and returns its result. [&rarr;](https://javascript.info/async-await)

* Simply 'await' until a promise gets a result. Execution stops and we wait until the promise is returned.
* Async/await enables the use of promises without callback hell and `.then` method binding.
* Await can **only** be used inside an **async function**. We can never have the main code stopping. All we do is block the code in the `async function`, which runs in background anyway. We then call it `synchronously`.

Ex.
```
async function getRecipeAW() {
    // ... //
}
getRecipeAW();
```
* Async functions almost automatically return a promise
* If we `return` a value from the async function using return keyword, then promise is automatically resolved. Hence, we can use .then to consume it. Ex. `getRecipesAW().then(result => console.log(${result} is the best));
`
