### Notes

**Execution Context** - a box container or a wrapper that stores variables in which a piece of our code is evaluated and executed.

* The default - code is not inside any function

* Associated with the global object

* In the browser, that's the window object

* LastName === window.lastName // true;

* Global to execution context is very important.

* var john = 'something' is a global variable.

* The code below is function in global context that goes into execution context and down the execution stack. Once the function goes into two and three(), then it's no longer in global context but in execution context. Once the code is run and evaluated then it goes back to its previous context.

```
function one() {
    function two() {
        // does something cool and then
        function three() {
            // does something cooler
        }
    }
}
```

* Execution context object: **Var object, Scope chain, 'this' variable.**

    1) Creation phase:
        a) Creation of the var object
        b) Creation of scope chain
        c) Determine value of `this` variable.

* Creation phase: argument object is created, containg all args that were passed into the function.
* Code is scanned for **function declarations** - for each function, a property is created in the variable object, **pointing to the function**. &rarr; HOISTING
* Code is scanned for **variable declations** - for each var, a property is created in the var object, and set to undefined. &rarr; HOISTING

    2) Execution phase:
        a) The code of the function that generated rthe current execution context is ran line by line.


### Scoping

* Where can we access a certain variable?

* Each new function creates a scope, the space/environment, in which the variables it defines are accessible.

* Lexical scoping: a function that is lexically within another function gets access to the cope of the outer function. (Parent function).

* In JS, the scope chain works from top to bottom. So, a global variable can be access in a local scope as it will read the code from top to bottom and search for any declared variables.
