 /*
Variables and data types
console.log('Hello World!!!');

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 30;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

//Variable naming rules

var _3years = 3;
var johnMark = 'John  and Mark';
*/

/*
Variable mutation and type coercion
*/

/**
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutatiion
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name');
console.log(firstName + ' ' + lastName); */

/**
 *Basic operaters
 */
/**
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math Operaters


yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;

console.log(johnOlder);

// typeof operater
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x); */

/**************
 * Operator precedence
 */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

///Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);


//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average)

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// 2 + 4 + 5

// More operaters
x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x += 1;
x++
console.log(x);

/******************
 * CODING CHALLENGE
 */
/*
var johnMass = 100;
var johnHeight = 1.60;

var markMass = 80;
var markHeight = 1.20;

bmiMark = markMass/(markHeight * markHeight);
bmiJohn = johnMass/(johnHeight * johnHeight);

console.log(bmiMark, bmiJohn);


var isBmiMark = bmiMark > bmiJohn;
console.log(" Is Mark\'s BMI bigger than John\'s? " + isBmiMark);
*/
/**********
 * If / else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var johnMass = 100;
var johnHeight = 1.60;

var markMass = 80;
var markHeight = 1.20;

bmiMark = markMass/(markHeight * markHeight);
bmiJohn = johnMass/(johnHeight * johnHeight);

if (bmiMark > bmiJohn) {
  console.log('mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s')
}


// var isBmiMark = bmiMark > bmiJohn;
// console.log(" Is Mark\'s BMI bigger than John\'s? " + isBmiMark);

/**********
* Boolean Logic
*/
/*
var firstName = 'John'
var age = 20;

if (age < 13) {
  console.log(firstName + 'is a boy.');
} else if (age >= 13 && age < 20) { //Between 13 and 20 === age >=
  //And age < 20
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/

/*********
* The Ternary Operator and Switch statements
*/
//Ternary Operator

/*
var firstName = 'Ade';
var age = 22;

age >= 18 ? console.log(firstName + ' does pushups.')
: console.log(firstName + ' does pullups.');

var workout = age >= 18 ? 'pullups' : 'pushups';
console.log(workout);

if (age >= 18) {
  var workout = 'pullups';
} else {
  var workout = 'pushups';
}
*/

/*
// Switch statements
var job = 'driver';
switch(job) {
  case 'teacher':
  console.log(firstName + ' teaches kids how to code.');
  break;
  case 'driver':
  console.log(firstName + ' drives an Uber in Berkeley.');
  break;
  case 'designer':
  console.log(firstName + ' designs beautiful websites.');
  break;
  default: console.log(firstName + ' goes to sleep.');

}

age = 20;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}


/**********
* Truthy and Falsy values and equality operators
*/

// falsy values: undefines, null, 0, '', naming// truthy values: NOT falsy values

/*
var height;

height = 23;
if (height) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}
*/

// coding challenge 3
/*
var scoreJohn = (129 + 120 + 103 ) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97+ 134 + 105) / 3;
console.log(scoreJohn, scoreMike);

if (scoreJohn > scoreMike) {
  console.log('Johns\s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
  console.log('Mike\s team wins with ' + scoreMike + ' points');
} else {
  console.log('There is a draw');
}
*/

/***********
* Functions
*/
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUutilRetriement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if(retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.')
  }
}

yearsUutilRetriement(1990, 'John');
yearsUutilRetriement(1948, 'Mike');
yearsUutilRetriement(1969, 'Jane');
*/


/*****************************
* Functions Statements and Expressions
*/
// Function declaration
// function whatDoYouDo(job, firstName) {


// Function Expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
      case 'teacher':
          return firstName + ' teaches kids how to code';
      case 'driver':
          return firstName + ' drives a cab in Berkeley';
      case 'designer':
          return firstName + ' designs beautiful websites';
      default:
          return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Ade'));
console.log(whatDoYouDo('retired', 'John'));

/*************
* Arrays
*/

//initialize new Array
var names = ['john', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);


// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'teacher', 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf('teacher'));

var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer' : 'John IS a designer';
console.log(isDesigner)

/**************
* Objects and properties
*/
//Object literal
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'Coder',
  isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

/*************************
* Objects and methods
*/

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'Coder',
  isMarried: false,
  calcAge: function(birthYear) {
      this.age = 2018 - this.birthYear;
  }
};
john.calcAge();
console.log(john);

/*coding challenge 4
*/

var john = {
  fullName: 'JOhn Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
  this.bmi =  this.mass / (this.height * this.height);
  }
};

/**********************************
* Loops and iteration
*/

// for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 9 < 10 true FALSE,  exit the loop!

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// while loop
var i = 0;
while(i < john.length) {
  console.log(john[i]);
  i++;
}

// continue and break Statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}
