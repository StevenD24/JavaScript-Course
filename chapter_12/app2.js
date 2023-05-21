// fetch api
// this returns a promise
// fetch('todos/steven.json').then((response) => {
//     console.log('resolved', response);
//     // gets the response data and parses it to an array
//     // returns a promise
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });

// async and await
// returns a promise that will either resolve or reject
const getTodos = async () => {
    // returns a promise, stored in response
    const response = await fetch('todos/steven.json');
    // console.log(response);

    // manual error message
    if (response.status !== 200) {
        throw new Error('Can not fetch the data.');
    }

    // returns a promise, stored in data
    const data = await response.json();
    return data;
};

console.log(1);
console.log(2);

// get the json data
// this is non-blocking since it is asynchronous
getTodos()
    .then(data => console.log('resolved: ', data))
    .catch(err => console.log('rejected: ', err.message));

// this code is not blocked
console.log(3);
console.log(4);