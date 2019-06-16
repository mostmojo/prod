
var john = {
    name: 'John',
    dob: 1993,
    job: 'teacher'
};

// Function constructor
var Person = function(name, dob, job) {
    this.name = name;
    this.dob = dob;
    this.job = job;
}

// Prototype property of function constructor
Person.prototype.calculateAge = function() {
    console.log(2019 - this.dob);
};

Person.prototype.lastName = 'Smith';

/* Instantiation - `this` is set to `new` object params, which are assigned to instance (john) variable
All instance variables of person constructor have calculateAge function as it's defined in parent person constructor OR in the prototype */
var john = new Person('John', 1993, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// Here's the proof 🤓 inheritance in practice
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// --- PRACTICE --- //

var Pokemon = function(name, type, attack) {
    this.name = name;
    this.type = type;
    this.attack = attack;
}

Pokemon.prototype.calcDamage = function() {
    console.log(100 - this.attack);
};

Pokemon.prototype.myOwner = 'Ash Ketchup';

var pikachu = new Pokemon('Pikachu', 'Electric', 48);
var slowbro = new Pokemon('Slowbro', 'Water', 35);
var machamp = new Pokemon('Machamp', 'Fight', 51);

pikachu.calcDamage();
slowbro.calcDamage();
machamp.calcDamage();

console.log(pikachu.myOwner);
console.log(slowbro.myOwner);
console.log(machamp.myOwner);

// 🔺----- Object.create() -----🔺 //

var personProto = {
    calculateAge: function() {
        console.log(2019 - this.dob);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.dob = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    dob: { value: 1969 },
    job: { value: 'designer' }
});

// Primitives & Objects

// Primitives
var a = 23;
var b = a;
a = 46; // mutation doesn't affect value of var b
console.log(a); // 46
console.log(b); // 23

// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1; // points to obj1 so has same values in memory
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30

// Functions

var age = 26;
var obj = {
    name: 'Jacob',
    city: 'London'
}

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age); // 26 (unchanged because primitive)
console.log(obj.city) // San Francisco (changes as it points to object)

/* when we pass a primitive into the function, a simple copy is created
* we can change 'a' as many times as we want. It won't affect var on the outside of the function scope, because it's a primitive
* when we pass the object, we actually pass a reference to the object
* again, it's the reference that POINTS to the object
* so when we change the object inside the function, it's reflected outside too :) */

// 🔺 --- Passing functions as arguments --- 🔺

var years = [1990, 1965, 1937, 2005, 1998];

// 1. this func has 2 params. Loop and grab index and callback to 2nd function to calcAge
function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

// 2. callback func which calcs age
function calculateAge(element) {
    return 2016 - element;
}
// => 26, 51, 79, 11 , 18

function isFullAge(element) {
    return element >= 18;
}
// => t t t f t

function maxHeartRate(element) {
    if (element >= 18 && element <= 81) {
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }
}
// =>  [189, 173, 154, -1, 195]


// var ages with arrayCalc functiion w/ 2 args where 2nd arg is a func
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate)

console.log(ages);
console.log(rates)

/*
1) create generic func that loops over an input array
2) gave it a fn as input to calc something based on each element of the array
*/

// 🔺----- Functions returning functions -----🔺 //

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach,' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

// The var below will hold the function that relates to the teacher as boolean will be true
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John'); // What subject do you teach, John?
designerQuestion('John'); // John, can you please explain what UX design is?
designerQuestion('Jane'); // Jane, can you please explain what UX design is?
designerQuestion('Mark'); // Mark, can you please explain what UX design is?

interviewQuestion('teacher')('Mark'); // fn works from left to right, so teacher arg will replace job param, then run that anon function and insert Mark arg in name param :)