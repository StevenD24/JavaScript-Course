// object literals
let user = {
    name: 'Steven',
    age: 30,
    email: 'Steven@test.com',
    location: 'Canada',
    blogs: ['blog1', 'blog2']
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

// one adv of using square brackets
const key = 'location';

// get value by key
console.log(user[key]);
user['name'] = 'chun-li';
console.log(user['name']);

// object type
console.log(typeof user);