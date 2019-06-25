# ES6

* Use ES6 and then polyfill or transpile to ES5 for production
* Variable declarations - let and const
* Blocks and IIFEs
* Strings
* Arrow Functions
* Destructuring
* Arrays
* Promises and Native Modules
* Spread Operator
* Classes and subclasses
* Rest and default parameters

-----

## Variables

* Variables in ES5 `var` are **function** scoped, whereas in ES6 `const` & `let` are **block** scoped.
* We can only use a variable once it's been declared and defined.
* All ES5 IIFEs with `(function() { var a = 1 })();` to make them private can simply be written inside curly braces in ES6, ex. `{ const a = 1 }`

-----

 ## Arrow functions

 * Single line functions don't need curly or normal braces or return keyword. Ex. `let age = years.map(el => 2019 - el);`
 * Single line functions with two parameters need normal braces around the parameters. Ex. `let age = years.map((el, index) => 2019 - el);`
 * Arrow functions with multiple lines need curly, normal braces and the return keyword. Ex.

 ```
let age = years.map((el, index) => {
    let now = new Date().getFullYear(); // 2019
    let age = now - el;
    return `Age elem: ${index + 1}: ${age}`;
});
 ```
* Arrow functions don't get their own `this` keyword. They use the `this` keyword of the function they are written in &rarr; `lexical this`. [More info](https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4).

* When using the `map` function - using **plural** vs **singular** parameters can make it easier to comprehend. Ex. `let arr = friends.map(friend => ${this.name} is friends with ${friend});`

* If we want to use `break` or `continue` statements in a loop, we cannot use `forEach` and `map`. So, `for loops` are necessary.
* `Continue` - skip the iteration of the loop and go to the next one.
* `Break` - break the iteration of the loop and won't continue on.
