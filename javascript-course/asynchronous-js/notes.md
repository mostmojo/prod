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