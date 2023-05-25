// store data in local storage
localStorage.setItem('name', 'steven');
localStorage.setItem('age', 50);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

// updating data
localStorage.setItem('name', 'kevin');
localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

// deleting data from local storage
// localStorage.removeItem('name');
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name);

const todos = [
    {text: "play mariokart", author: "steven"},
    {text: "buy bread", author: "kevin"},
    {text: "buy milk", author: "lin"}
];

// console.log(JSON.stringify(todos));
// turn an JS object into a JSON string
localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

// turn a JSON string back into an array
console.log(JSON.parse(stored));
