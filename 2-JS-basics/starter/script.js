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
var average = (ageJohn + ageMark)  / 2;
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

var johnMass = 100;
var johnHeight = 1.60;
var markMass = 80;
var markHeight = 1.20;

bmiMark = markMass/(markHeight * markHeight);
bmiJohn = johnMass/(johnHeight * johnHeight);

console.log(bmiMark);
console.log(bmiJohn);

var isBmiMark = bmiMark > bmiJohn;
console.log(" Is Marks BMI bigger than Johns?" + isBmiMark);
