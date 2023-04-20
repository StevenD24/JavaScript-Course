const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');

// take the event parameter in the callback function
form.addEventListener('submit', e => {
    e.preventDefault(); // prevent the default action (refreshing)
    console.log(username.value); // gets the value in the textbox
    console.log(form.username.value);
});
