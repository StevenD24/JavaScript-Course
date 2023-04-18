// query the button
const button = document.querySelector('button');
const ul = document.querySelector('ul');

// fires the callback function when the button is clicked
button.addEventListener('click', e => {
    // ul.innerHTML += '<li>something new</li>';
    
    // different way to achieve the above result
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // ul.append(li); // put at the bottom
    ul.prepend(li); // put at the top
});

// const ul = document.querySelector('ul');
// ul.remove();

// want all of the li tags
// gives us a node list
const items = document.querySelectorAll('li');

// event listener automatically has e parameter in the
// callbakc function for the event listener
// e.target gets the individual list item
items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log('item clicked');
        console.log(e.target);
        // puts a line through the text when the item is clicked
        e.target.style.textDecoration = 'line-through';
        console.log('event in LI');
        // e.stopPropagation(); // stops the event bubbling up to the parent
        e.target.remove();
    });
});

// event listener for the ul
ul.addEventListener('click', e => {
    // console.log('event in UL');
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
    console.log(e.target);
});