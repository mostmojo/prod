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