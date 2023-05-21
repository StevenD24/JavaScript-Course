const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            resolve(data);
        } else if (request.readyState === 4) {
            reject('error getting resource');
        }
    });

        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos/steven.json').then(data => {
    console.log('promise resolved: ', data);
    return getTodos('todos/kevin.json');
}).then(data => {
    console.log('promise 2 resolved: ', data);
    return getTodos('todos/lin.json');
}).then(data => {
    console.log('promise 3 resolved: ', data);
}).catch(err => {
    console.log('promise rejected: ', err);
});

console.log(1);
console.log(2);

// async request is not blocking the code below.
// this is an example of callback hell
// if u need to call an API and use that info to call another API
// getTodos('todos/steven.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/lin.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/kevin.json', (err, data) => {
//             console.log(data);
//         });
//     });
//     // if (err) {
//     //     console.log(err);
//     // } else {
//     //     console.log(data);
//     // }
// });

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something
//         resolve('some data');
//         // reject('some error');
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

console.log(3);
console.log(4);

// JSON are strings that looks like JS objects