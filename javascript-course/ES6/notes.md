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
