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
