// for loops
for (let i = 0; i < 5; i++) {
    console.log("in loop:", i);
}

console.log('loop finished');

// iterate through an array
const names = ['steven', 'shaun', 'kale'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// while loops
let i = 0;
while (i < 5) {
    console.log("in loop:", i);
    i++;
}

// do while loops
let j = 0;
do {
    console.log("in loop:", j);
    j++;
} while (j < 5);

// if statements
const age = 20;

if (age > 20) {
    console.log('you are over 20 years old');
}

// arr length
const ninjas = ['nin1', 'nin2', 'nin3', 'nin4', 'nin5'];

if (ninjas.length > 3) {
    console.log("that's a lot of ninjas");
}

// if else statements
const password = '123456@';

if (password.length >= 12 && password.includes('@')) {
    console.log('that password is strong');
} else if (password.length >= 8 || (password.includes('@') && password.length > 5)) {
    console.log('that password meets the requirements');
} else {
    console.log('that password is strong enough');
}

// logical NOT (!)
let user = false;

if (!user) {
    console.log('you must be logged in to continue');
}

// break and continue
const scores = [50, 25, 0 , 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++) {
    console.log('your score: ', scores[i]);

    if (scores[i] === 0) {
        continue;
    }

    if (scores[i] === 100) {
        console.log('congrats you got the top score!');
        break;
    }

}

// switch case statements
const grade = 'A';

switch(grade) {
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B');
        break;
    case 'C':
        console.log('You got a C');
        break;
    case 'D':
        console.log('You got a D');
        break;
    case 'F':
        console.log('You got an F');
        break;
    default:
        console.log('not a valid grade');
}

// variables and block scope
let age1 = 30;

if (true) {
    let age1 = 40;
    console.log('inside 1st code block ', age1);
}

console.log('outside code block: ', age1);

