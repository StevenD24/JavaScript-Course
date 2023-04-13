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