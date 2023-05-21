// HTTP requests to get data from another server
// we make thse requests to API endpoints

// creates a request object
// this will be used to send a request to the browser
// send a request to get some data
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    // readyState = 4 means that the request was completed
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
});

// type of request and where to get the data from
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// sends the request
request.send();