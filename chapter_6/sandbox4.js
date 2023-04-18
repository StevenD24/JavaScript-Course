const button = document.querySelector('button');

// fires the callback function when the button is clicked
button.addEventListener('click', () => {
    console.log('you clicked me');
});

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
    });
});