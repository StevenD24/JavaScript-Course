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
