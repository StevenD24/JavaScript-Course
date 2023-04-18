const button = document.querySelector('button');

// fires the callback function when the button is clicked
button.addEventListener('click', () => {
    console.log('you clicked me');
});

// want all of the li tags
// gives us a node list
const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', () => {
        console.log('item clicked')
    });
});