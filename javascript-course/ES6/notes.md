# ES6

* Use ES6 and then polyfill or transpile to ES5 for production
* Variable declarations - let and const
* Blocks and IIFEs
* Strings
* Arrow Functions
* [Destructuring](https://wesbos.com/destructuring-objects/)
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

-----

## Section notes

* When using the `map` function - using **plural** vs **singular** parameters can make it easier to comprehend. Ex. `let arr = friends.map(friend => ${this.name} is friends with ${friend});`

* If we want to use `break` or `continue` statements in a loop, we cannot use `forEach` and `map`. So, `for loops` are necessary.
* `Continue` - skip the iteration of the loop and go to the next one.
* `Break` - break the iteration of the loop and won't continue on.
* `for...of` is used when we want to have `continue` or `break` inside a for loop. Then we can use the method `includes('blue')` to check and continue or break.
* ES6 methods: `find` & `findIndex` are also shorthand for finding an element's index or the element itself.
* `apply()` - calls a function w/ a given `this` value, and arguments provided as an array. Identical to `call()` but w/ array args. `addFourAges.apply(null,ages);`
* **Spread** - uses `...` syntax to substitute values in an array. Shorthand. `const max = addFourAges(...ages);`
* `Array.from(xs);` - converts nodeList into an array. Once converted, we can iterate with forEach. (ES6). || `Array.prototype.slice.call(x)` in ES5.
* `Array.from(xs).forEach(x => x.style.color = 'red');`
* `REST params` have identical notation to `spreads`, but they allow an indefinite amount of arguments in an array.
* **Rest parameter**: collects all remaining elements into an array. **Spread operator:** allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.
* We simply add a limit parameter into the  REST Parameter function, and include the argument when the array is called with it's arguments. Ex. `(limit, ...years)` and then [21, 1990, 2005, 2012, 1993];` Where 21 is the limit works fine.

* **Default Params**: set default values as parameters in a function for ex. `function newGuy (fName, lName = 'Jackson', age) {...}`

* **Maps / hash maps** : creating a `new Map()` and setting values with `key value` pairs. can use .`size` to check `length`, `has` to see if key is present and `delete` to get rid of a k:v.
* **Benefit of maps:**
* Use anything as key - making it easy to iterate and manipulate data
* Really easy to get the length of map using the `size` property
* Easily add and remove data from a map

### Classes

* by declaring a 'parent constructor class' with `class` and `constructor`, we can then add a `prototype` without the need to `Person5.prototype.functionNameGoesHere()`, we simply write it out as `functionNameGoesHere()` and ES6 will do the rest behind the scenes.
* Class - behind the scenes is actually an `object`, so we can attached `functions to objects`. Remember ES6 Classes are 'syntactic sugar'. ES6 helps us write more shorthand declarations.
* In ES6, by using `extends`, the sub class can inherit the super(parent) class properties. They are also 'fetched' with the `super` method. We no longer need to create the `Athlete5.prototype = Object.create(Person5.prototype);` link with ES5, but it does happen behind the scenes.
* By declaring the `constructor` method, we can have sub classes inherit from super classes and instances of sub classes inherit from both. Ex. an instance of an Athlete `const jimAthleteES6 = new AthleteES6('Jim', 1993, 'swimmer', 3, 10 );` will inherit props from both Person and Athlete parent constructors and be able to utilize methods like `jimAthleteES6.calculateAge();` from its parents.
* **Note** - In ruby, php and other OOPs, classes are as they are &rarr; **class based inheritance**. Whereas, in JavaScript, these 'classes' are tied with the prototype chain behind the scenes. &rarr; **prototype-based inheritance.**
-----
