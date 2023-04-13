// Document Object Model
// hierarchy of tree of nodes
// root is   
// Tree: 
//            html (root node)
//          /      \
//       head     body
//       /      /  |  \
//    title   h1  div  div (text nodes)
//                 | \
//                 p  p (text nodes)
//
// each element is considered a node in the Document Object Model (DOM)
// DOM will get a reference to a particular node to change its contents

// goes from top to bottom. Grabs the first p tag. (CSS Selector)
// use dot first for classes
const para = document.querySelector('div.error');

console.log(para);

// not an array. This a NodeList
const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para);
})

const errors = document.querySelectorAll('.error');

// gets p.error and div.error
errors.forEach(error => {
    console.log(error);
})



