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