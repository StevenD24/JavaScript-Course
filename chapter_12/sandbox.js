console.log(1);
console.log(2);

// example of an async code
setTimeout(() => {
    console.log('callback function fired')
}, 2000);

console.log(3);
console.log(4);

// HTTP requests to get data from another server
// we make thse requests to API endpoints