// function declarations
function greet() {
    console.log('hello world');
}

// function expression
const speak1 = function() {
    console.log('good day!');
};

// function call
greet();

// invoke function expression
speak1();

// JavaScript hoists function declarations, but not expressions. 

// arguments & parameters
const speak = function(name='bob', time='day') {
    console.log(`good ${time} ${name}`);
};

// uses default parameters when there are no args
speak();

// order of arguments matter
speak('Steven', 'morning');

// area function
const calcArea = function(radius) {
    return 3.14 * radius**2;
};

// this area has global scope
const area = calcArea(5);
console.log(area);

// volume function
const calcVol = function(area, height) {
    return area*height;
};

const vol = calcVol(area, 10);
console.log(vol);

// arrow function. Able to remove parameter if there is only one parameter
const calcArea1 = (radius) => {
    return 3.14 * radius**2;
};

// arrow function. Able to remove parameter if there is only one parameter.
// able to remove the return keyword
const calcArea2 = radius => 3.14 * radius**2;

const area1 = calcArea1(4);
console.log(area1);

// regular function
const greet1 = function() {
    return 'hello world';
}

// conversion to arrow function
const greet2 = () => 'hello world';

console.log(greet2());

// regular bill function
const bill = function(products, tax) {
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

// conversion to arrow function
const bill1 = (products, tax) => {
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15, 20], 0.2));




