// callbacks & foreach

// takes a call back function as a parameter
const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

// pass a function as an argument
myFunc(value => {
    // do something
    console.log(value);
});

let people = ['steven', 'kevin', 'ben', 'ryu', 'barry'];

// external call back function (a function that is passed as an argument).
const logPerson = (person, index) => {
    console.log(`${index}, hello ${person}`);
};

// takes in the value in the array as the first param, then the index as the second param
people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');

// empty template string
let html = ``;

people.forEach(person => {
    // create html template
    // li is for (bulleted list)
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;