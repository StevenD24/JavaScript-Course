const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

// take the event parameter in the callback function
form.addEventListener('submit', e => {
    e.preventDefault(); // prevent the default action (refreshing)
    // console.log(username.value); // gets the value in the textbox
    console.log(form.username.value);
});

// testing Regex
const username = 'steven';
const pattern = /^[a-z]{6,}$/

// let result = pattern.test(username);
// console.log(result);

// if(result) {
//     console.log('regex test passed')
// } else {
//     console.log('regex test failed')
// }

// returns an integer
let result = username.search(pattern);
console.log(result);
