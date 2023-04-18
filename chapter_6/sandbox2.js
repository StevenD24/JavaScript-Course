// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

// use textContent to get all tags in the paragraph
paras.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    }

    if (p.innerText.includes('success')) {
        p.classList.add('success');
    }
});

// grabs the title class
const title = document.querySelector('title');

title.classList.toggle('test');
title.classList.toggle('test');