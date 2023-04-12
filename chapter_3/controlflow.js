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


