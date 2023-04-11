// let age = 25;
// let year = 2019;


// // log things to console
// console.log(age, year);

// age = 30;
// console.log(age);

// const point = 100;
// console.log(point);

// var score = 75;
// console.log(score);

// strings
console.log('hello world!');

let email = 'steven@gmail.com';
console.log(email);

// string concatenation
let firstName = 'Steven';
let lastName = 'Duong';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods
let results = email.lastIndexOf('e');
console.log(results);

results = email.slice(4, 10);
console.log(results);

// numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, /, **, %
console.log(10 / 2);
let res = radius % 3;
let area = pi * radius**2;

console.log(res, area);

let likes = 10;
likes++;
likes--;
likes+=10;
likes*=2;
likes-=5;
likes/=2;
likes-=0.5;

console.log(likes);

// NaN - not a number
console.log(5 / 'hello');
console.log(5 * 'hello');

let strRes = 'the blog has ' + likes + ' likes';
console.log(strRes);
