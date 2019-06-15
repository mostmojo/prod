
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

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(element) {
    return 2019 - element;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);