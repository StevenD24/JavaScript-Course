const scores = [10, 30, 15, 25, 50, 40, 5];

// does not alter the original array.
// non-destructive
// fires a callback function for each item in the array.
const filteredScores = scores.filter((score) => {
    return score > 20;
});

console.log(filteredScores);

const users = [
    {name: 'haru', premium: true},
    {name: 'steven', premium: false},
    {name: 'kevin', premium: false},
    {name: 'emily', premium: true}
];

const premiumUsers = users.filter(user => {
    return user.premium;
});

console.log(premiumUsers);

// map method
// cycles through an array and returns a new array with the updated elements
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map((price) => {
    return price / 2;
});

console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

// return a new product with half the prices for the products
// protect the original array and only updates objects in the new array
const saleProducts = products.map((product) => {
    if (product.price > 30) {
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
    }
});

console.log(saleProducts);

// reduce method
const scores1 = [10, 20, 60, 40, 70, 90, 30];

// takes the accumulator and current as args
// acc is the running total
// current is the current element
const result = scores1.reduce((acc, curr) => {
    if (curr > 50) {
        acc++;
    }
    return acc;
}, 0);

console.log(result);

// array of objects
const scores2 = [
    {player: 'p1', score: 50},
    {player: 'p2', score: 30},
    {player: 'p1', score: 70},
    {player: 'p3', score: 60},
    {player: 'p1', score: 50},
    {player: 'p2', score: 30},
    {player: 'p1', score: 70},
    {player: 'p3', score: 60},
    {player: 'p1', score: 90},
    {player: 'p2', score: 30},
    {player: 'p1', score: 70},
    {player: 'p3', score: 90},
];

const p3Total = scores2.reduce((acc, curr) => {
    if (curr.player === 'p3') {
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(p3Total);

// find method
const scores4 = [10, 5, 0, 40, 30, 10, 90, 70];

// stops when it first finds a value that passes this condition
const firstHighScore = scores4.find((score) => {
    return score > 50;
});

console.log(firstHighScore);

// example 1 - sorting strings
const names = ['steven', 'haru', 'emily', 'bugcat'];

// example 2 - sorting numbers
names.sort();
console.log(names);

const scores5 = [10, 50, 20, 5, 35, 70, 45];

scores5.sort();
console.log(scores5);