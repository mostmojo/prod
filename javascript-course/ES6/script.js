// 🔸 --- Lecture: let and const --- 🔸//

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6); // error: asignment to constant variable - it's immutable! Use let :)

// ES5
function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.'); // this works because the console.log is within the driversLicence5 function scope.
}
driversLicence5(true);

// ES6
driversLicence6 = (passedTest) => {

    // console.log(firstName) // Error, hoisting won't work because trying to access a variable before it's declared doesn't work
    if (passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
    }
    // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);

// ☝ Uncaught ReferenceError: firstName is not defined at driversLicence6 (script.js:31) at script.js:33. The console.log'd variables (const and let) HAVE to be inside the curly braces, in BLOCK scope.


let i = 23;
for(let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}
console.log(i); // 23 -> as outer i is global scope and inner i is block scope

// 🔸 --- Lecture: Blocks and IIFEs --- 🔸

//ES6
{
    const a = 1;
    let b = 2;
}

// console.log(a + b); // Error: a is not defined -> because the vars are block scoped
// However, if we add a var c = 3 in the block scope above, it would still render it in the console because vars are NOT block scoped, they're function scoped.

// ES5
(function() {
    var c = 3;
})();

// console.log(c); // Error: c is not defined because this IIFE is enclosed in () so it's private.
// This whole thing is exactly the same as using curly braces in ES6.

// 🔸 --- Lecture: Strings --- 🔸

let firstName = 'Joey';
let lastName = 'Sands';
const yearOfBirth = 1993;

function calcAge(year) {
    return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');