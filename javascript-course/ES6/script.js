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


// let i = 23;
// for(let i = 0; i < 5; i++) {
//     console.log(i); // 0 1 2 3 4
// }
// console.log(i); // 23 -> as outer i is global scope and inner i is block scope

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
const boxes =
document.querySelectorAll('.box');

//ES5
var boxesArr5 =
Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(box){
    box.style.backgroundColor = 'dodgerblue';
});

//ES6 -> Transform nodelist in const boxes to an array!
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(box => box.style.backgroundColor = 'dodgerblue');

// ES5 - loop through boxes, if class has 'blue' in HTML, skip and keep going, else add text 'i changed to blue'
/*
for(var i = 0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className ===  'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}
*/

// ES6 - of w/ string method includes
for(const box of boxesArr6) {
    if (box.className.includes('blue')) {
        continue;
    }
    box.textContent = 'I changed to blue!';
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(age) {
 return age >= 18;
});
console.log(full);
console.log(full.indexOf(true)); // 3
console.log(ages[full.indexOf(true)]); // 21

// ES6
console.log(ages.findIndex(age => age >= 18)); // 3
console.log(ages.find(age => age >= 18)); // 21

// 🔸 --- Lecture: Spread operator --- 🔸 -- allows iterables (arrays, objs, etc) to be expanded into single elements or args
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages); // null = this variable. Take that array and call
console.log('~~~~~');
console.log(sum2);

// ES6 - SPREAD
const sum3 = addFourAges(...ages);
console.log(sum3);

// Another usecase of Spread - EXPANDING TWO SEPARATE ARRAYS INTO ONE
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', 'Napoleon', ...familyMiller]; // fuses both with spread, and new values can be added in between
console.log(bigFamily);

// Fusing nodeLists with spread
const h = document.querySelector('h1'); // node
const b0xes = document.querySelectorAll('.box'); // nodeList that can be expanded with spread
const all = [h, ...b0xes];

Array.from(all); // converts nodeList into an array
Array.from(all).forEach(node => node.style.color = 'lightblue');

// 🔸 --- Lecture: REST parameters --- 🔸 - collect all remaining elements into an array

/* ES5
function isFullAge5() {
    // console.log(arguments); // Array-like structure, but NOT an array
    var argsArray = Array.prototype.slice.call(arguments); // To convert it into an array the ES5 way
    argsArray.forEach(function(arg) {
        console.log((2019 - arg) >= 18);
    })
}

// isFullAge5(1990, 2005, 1965);
// isFullAge5(1990, 2005, 1965, 1967, 2003);

// ES6 - COLLECT ALL ELEMENTS INTO ONE ARRAY (inifinite amount possible)
function isFullAge6(...years) {
    years.forEach(year => console.log((2019 - year) >= 18)); // t f t
}

isFullAge5(1990, 2005, 1965, 2019, 1987); // can add an indefinite amount of arguments to the array
*/
console.log('-x-x-x-x');
// ES5
function isFullAge5(limit) {
    // console.log(arguments); // Array-like structure, but NOT an array
    var argsArray = Array.prototype.slice.call(arguments, 1); // To convert it into an array the ES5 way. Only at position 1 will it take action. So, first arg is excluded.
    argsArray.forEach(function(arg) {
        console.log((2019 - arg) >= limit);
    })
}

// isFullAge5(16, 1990, 2005, 1965);
// isFullAge5(1990, 2005, 1965, 1967, 2003);

// ES6 - COLLECT ALL ELEMENTS INTO ONE ARRAY (inifinite amount possible)
function isFullAge6(limit, ...years) {
    years.forEach(year => console.log((2019 - year) >= limit)); // t f t
}

isFullAge5(21, 1990, 2005, 1965, 2019, 1987); // can add an indefinite amount of arguments to the array
// by assigning a limit as a parameter to the isFullAge6 function, and then the limit into the argument array - it works!

// 🔸 --- Lecture: Default parameters --- 🔸

// ES5
function smithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new smithPerson('John', 1990);
// smithPerson {firstName: "John", lastName: undefined, yearOfBirth: 1990, nationality: undefined};
// when we set default parms they replace undefined with what is set. 👇🏼

var joanna = new smithPerson('Joanna', 2006, 'Diaz', 'Spanish');

// ES6
function smithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var joe = new smithPerson('Joe', 1940);
var beca = new smithPerson('Beca', 1998, 'Stevens', 'Dutch');
console.log('-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-•-')

// 🔸 --- Lecture: Maps --- 🔸 // hash maps

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
console.log(question.get(false));
console.log(question.size); // the .length equivalent of maps

if (question.has(4)) {
    // question.delete(4);
    console.log('answer 4 is here');
}

// question.clear(); // clears the whole map

// question.forEach((value, key) =>
// console.log(`This is ${key}, and it's value set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));

// 🔸 --- Lecture: Classes --- 🔸

// ES5 - Parent constructor with prototypial inheritance from john5 instance of Person
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting() { // Static method, only attached to Person6 class
        console.log('Hey there')
    }
}

const john6 = new Person6('John', 1990, 'teacher');
Person6.greeting(); // we can attach methods to this "Class" because behind the scenes it's actually an object, so we can attached functions to objects. Remember ES6 Classes are 'syntactic sugar'
// Classes are NOT hoisted, unlike parent constructors. Need to first implement it and later use it
// We can only add methods to classes, not properties

// ES5 ----------------------------------- HOW TO CONNECT TWO FUNCTION CONSTRUCTORS ----------------------------------------------------
// Super class
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
// Sub class
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job); // can receive these params as they'e also passed on the line above to Athelete5
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// a new instance of Athelete5, with `new` keyword will need to inherit from Athlete5 and Person parent constructors. Thus, both parents need the `this` keyword to point to the new instances' objects.

Athlete5.prototype = Object.create(Person5.prototype); // tying Athlete5 with Person5 prototypes in the prototype chain. New Object is created with Person constructor as an argument passed into it

Athlete5.prototype.wonMedal = function() { // has to be built AFTER the two prototype chains are connected, else the jonAthlete5.wonMedal() will throw an undefined error
    this.medals++;
    console.log(this.medals);
}

// jon object that inherits from both super and sub class
var jonAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
jonAthlete5.calculateAge(); // 29 - because all instances of Person and Athlete inherit this method
jonAthlete5.wonMedal(); // 11

// ES6 ----------------------- HOW TO CONNECT TWO FUNCTION CONSTRUCTORS --------------------------------
// Superclass
class PersonES6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

}

class AthleteES6 extends PersonES6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job); // fetches these parameters/args from the super PersonES6 class
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const jimAthleteES6 = new AthleteES6('Jim', 1993, 'swimmer', 3, 10 );

jimAthleteES6.wonMedal();
jimAthleteES6.calculateAge();

// --------------------------------------------------------------------------------
// 🔺 ~~~~~~~~ Challenge ~~~~~~~~ 🔺

// Super class
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

// Sub class #1
class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; // km^2
        this.numTrees = numTrees;
    }
    // Method for calculating tree density of an object
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

// Sub class #2
class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    // hash map
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`)

    }
}

// INSTANCES of sub class Park
const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

// INSTANCES of sub class Street
const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th street', 2015, 0.8), // should default to size = 3
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calc(array) {

    const sum = array.reduce((prev, current, index) => prev + current, 0);
    //[3, 5, 6] -> 1) 0 + 3 = 3, 2) 3 + 5 = 8, 3) 8 + 6 = 14;

    return [sum, sum / array.length]; // total of all elements, average

}

function reportParks(parks) {
    console.log('----- PARKS REPORT -----');

    // Density
    parks.forEach(park => park.treeDensity());

    // Average age of each park
    const ages = parks.map(park => new Date().getFullYear() - park.buildYear);
    const [totalAge, avgAge] = calc(ages); // will get the parks array and iterate through it, create a new array of parks, get age of the park, plug it into the calc() function, and return the avgAge as there isn't a 2nd parameter
    console.log(`Our ${parks.length} parks have an average of ${avgAge}`)

    // Which park has more than 1000 trees
    const i = parks.map(park => park.numTrees).findIndex(park => park >= 1000);
    console.log(`${parks[i].name} has more than 1000 trees`);
}

function reportStreets(streets) {
    console.log('----- STREETS REPORT -----');

    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(streets.map(street => street.length));
    console.log(`Our ${streets.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    //Classify the sizes
    streets.forEach(street => street.classifyStreet());

}

reportParks(allParks);
reportStreets(allStreets);


