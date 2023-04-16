const para = document.querySelector('p');

console.log(para.innerText);
para.innerText = 'I am editing this text';

// reference to all of the 'p' tags
const paras = document.querySelectorAll('p');

// want to change the text of several items at once
// para is a custom name
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});

// getting a reference to the content div
const content = document.querySelector('.content');
console.log(content.innerHTML);

content.innerHTML = '<h2>this is a new h2</h2>';
content.innerHTML += '<h2>this is another header</h2>';

// content.innerHTML = '<p>this is the content</p>';

// appending p tags to the content div in HTMl
// example pulling people from a database 
// and storing the contents in an array
const people = ['steven', 'kevin', 'sarah'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});