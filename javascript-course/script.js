///////////////////////////////////////
// Lecture: Hoisting - declarations being moved to top of your code (in memory during compile phase)

//Function declaration - Hoisting works. We can use function declarations before we 'declare them' in our code.
calculateAge(1993);

function calculateAge(year) {
    console.log(2019 - year);
}

// Function expression - Hoisting doesn't work. We can't use the function before the variable is declared in our code.

// retirement(1993); // Error: retirement is not a function. Needs to be declared first! DECLARE YOUR VARS AT THE TOP 🤓

var retirement = function(year) {
    console.log(65 - (2019 - year));
}

retirement(1993); // Works as it's been declared.


// variables

console.log(age); // undefined
var age = 23;
console.log(age); // 23 as it's been defined in line 25.

function foo() {
    var age = 65;
    console.log(age); // 65 as foo function has it's own execution context object
}

foo();
console.log(age); // 23 because var age on line 25 is stored in global execution context object

// since var age (the first one) is defined in global execution context, we can have another var age variable within a function (execution context within a function). We can have the same var age and JS won't throw an error because they're in a completely different context!

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









