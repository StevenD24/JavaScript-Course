// gives an HTML collection
// can not use forEach method
const article = document.querySelector('article');

console.log(article.children);

console.log(Array.from(article.children));
console.log(article.children);

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

// find the parent of the h2 tag
const title = document.querySelector('h2');
// finds the parent of the article using chaining
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// chaining
// all children of the article tag
console.log(title.nextElementSibling.parentElement.children);
