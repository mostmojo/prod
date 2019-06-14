
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