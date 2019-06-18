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
console.log(firstName + ' ' + lastName);

/**
*Basic operaters
*/
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
console.log(typeof x);

/**************
* Operator precedence
*/

var now = 2018;
var yearJohn = 1998;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
