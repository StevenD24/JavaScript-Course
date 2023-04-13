// get an element by ID. ID's must be unique
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
// gets an HTMLcollection
// can not use forEach on HTMLcollection
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// get elements by their tag name
// gets an HTMLcollection
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);

// css selector to get the first p
const para = document.querySelector('p');
console.log(para.innerText);