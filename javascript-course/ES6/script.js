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

// ES5 - long!
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 - Template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // true
console.log(n.startsWith('j')); // false
console.log(n.endsWith('ds')); // true
console.log(n.includes(' ')); // true
console.log(`${firstName} `.repeat(5)); // add the space inside the backticks

// 🔸 --- Lecture: Arrow functions --- 🔸

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(year) {
    return 2019 - year;
});
console.log(ages5); // 2019 - 1990, 2019 - 1965, etc.

// ES6

let ages6 = years.map(year => 2019 - year); // when one single line, no need for curly braces {} or normal braces () and return keyword
console.log(ages6);

ages6 = years.map((year, index) => `Age element ${index + 1}: ${2019 - year}.`); // Age element 1: 29, etc // when 2 parameters, add braces ()
console.log(ages6);

ages6 = years.map((year, index) => {
    const now = new Date().getFullYear();
    const age = now - year;
    return `Age element ${index + 1}: ${age}.`; // Age element 1: 29, etc
});
console.log(ages6); // when more than two lines, curly braces and return needed

/* iterate through years array, create new array
for each element in years array, today's date - el(the year)
return index of array + 1 because zero-based & age */

// 🔸 --- Lecture: Arrow functions II --- 🔸

// ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
box5.clickMe();

/*
without var self = this, we get undefined error because a callback function refers to global window object and not the box5 object's scope.
Thus, color and position are undefined in global window scope, as they only live inside var box5 scope.
By declaring this to var self, it can be referenced inside the var box5 object's scope even as a callback. Small hack!🤓
*/

// ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

/* Function above shares the `this` keyword with it's surroundings - it's LEXICAL.
 So, it points to the box6 object */

// ~~~~~~~~~~~~~~~~~~~~~

/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();

This renders undefined because `clickMe: () =>` points the the global window object and not the box66 function anymore.
*/

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 =
    function(friends) {

        var arr = friends.map(function(friend) { // anon func points to window object
            return this.name + ' is friends with ' + friend;
            // console.log(arr);
        }.bind(this)); // manually bind this (John instance)
        console.log(arr);
    }

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 =
    function(friends) {

        let arr = friends.map(friend => `${this.name} is friends with ${friend}`);
            console.log(arr);
    }

new Person('Mike').myFriends6(friends);

// 🔸 --- Lecture: Destructuring --- 🔸
console.log('----------------');
// ES5

var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    fName: 'John',
    lName: 'Smith'
};

const {fName, lName} = obj; // object's params HAVE to match obj keys
console.log(fName);
console.log(lName);

const {fName: a, lName: b} = obj; // reassign key names to different names
console.log(a); // John
console.log(b); // Smith

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2); // 29
console.log(retirement); // 36

// 🔸 --- Lecture: Arrays --- 🔸
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 =
Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(box){
    box.style.backgroundColor = 'dodgerblue';
});