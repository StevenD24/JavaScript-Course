const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');

// take the event parameter in the callback function
form.addEventListener('submit', e => {
    e.preventDefault(); // prevent the default action (refreshing)
    // console.log(username.value); // gets the value in the textbox
    // console.log(form.username.value);

    // form validation using regex
    const username = form.username.value;
    const usernamePattern = /^[a-z]{6,12}$/;

    if (usernamePattern.test(username)) {
        // feedback good info
        feedback.textContent = 'that username is valid!';
    } else {
        // feedback help info
        feedback.textContent = 'username must contain letters only and must be between 6 & 12 characters long';
    }
});

// testing Regex
// const username = 'steven';
// const pattern = /^[a-z]{6,}$/

// let result = pattern.test(username);
// console.log(result);

// if(result) {
//     console.log('regex test passed')
// } else {
//     console.log('regex test failed')
// }

// returns an integer
// let result = username.search(pattern);
// console.log(result);
