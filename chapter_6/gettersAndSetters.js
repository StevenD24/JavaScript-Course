// reference to the HTML element we want to work with
// use querySelector
const link = document.querySelector('a');

// getter for attribute
console.log(link.getAttribute('href'));

// setter for attribute
link.setAttribute('href', 'https://www.youtube.com');
link.innerText = 'Youtube';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: green;');

const title = document.querySelector('h1');
// title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

// CSS style changes
title.style.margin = '55px';
title.style.color = 'crimson';
title.style.fontSize = '40px';
title.style.margin = '';
