// object literals

// array of objects
const blogs = [
    { title: 'Titanic blog', likes: 30 },
    { title: 'BMW blog', likes: 45 },
];

console.log(blogs);

// object literal
let user = {
    name: 'Steven',
    age: 30,
    email: 'Steven@test.com',
    location: 'Canada',
    blogs: [
        { title: 'Titanic blog', likes: 30 },
        { title: 'BMW blog', likes: 45 },
    ],
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs() {
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
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

user.login();

const name = 'kale';
name.toUpperCase();

user.logout();

user.logBlogs();

// global window
console.log(this);

// Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 5.33;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

// primitive values have deep copy
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

// reference values with shallow copy
const userOne = { name: 'ryu', age: 24};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);