let email = 'stevenduongx@gmail.com';
let names = ['steven', 'kevin', 'ben'];

// array method
let result = email.includes('');
let result1 = names.includes('don');

console.log(result1);

let age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);

let name = 'steven';
console.log(name == 'steven');
console.log(name == 'duong');

// loose comparison (different types can still be equal)
console.log(age != 25);
console.log(age != '25');
console.log(age != 30);

// strict comparison (different types can not be equal)
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');

// type conversion
let score = '100';
score = Number(score);
console.log(score + 1);
console.log(typeof score);

// NaN
let result2 = Number('hello');
console.log(result2);

// num to string
let number = 50;
console.log(number, typeof number);

// string to boolean
let bool = true;
let res = Boolean('');
console.log(res);
