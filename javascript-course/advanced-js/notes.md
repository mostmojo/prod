# Prototypes & Prototype chains

<p align="left">
  <img width="620" height="420" src="https://res.cloudinary.com/mostmojo/image/upload/v1560512736/Screenshot_2019-06-14_at_12.42.18.png">
</p>

* Every JS object has a **prototype property** which makes inheritance possible in JavaScript.
* The prototype property of an object is where we can put methods and properties that we want **other objects to inherit**.
* The Constructor's prototype property is **NOT** the prototype of the Constructor itself. It's the prototype of **ALL** instances that are created through it.
* When a certain method(or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: **prototype chain**.

* John can inherit `calculateAge()` method as the `person constructor` has the method added to it as a `prototype`. Thus, then `John` (which is an instance of `person constructor`) can call `calculateAge()`.
* Anything put into `prototype property` of an object can be inherited by other objects.
* **The real rabbit hole:** The `person constructor` is an **instance** of `object Object constructor`, which has a bunch of other properties such as `toString()`, `valueOf()`, `hasOwnProperty()`, etc. The `person constructor` object can call these properties 😊
* And so can `John object`! All because of the `prototype chain`.
* The only thing above the `object Object` parent is `null`, which has no other properties.

#### First-class functions

* Function is an instance of the Object type.
* Function behaves like any other object.
* Can store functions in a variable.
* Can pass function as an argument to another function.
* We can return a function from a function.

#### Closures

* An inner function **always** has access to the variables and parameters of its outer function, even **after** the outer function has returned.
* The scope chain always stays intact.
