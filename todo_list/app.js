// gets us the reference to the form
const addForm = document.querySelector('.add');
// get reference to the ul
const list = document.querySelector('.todos');
// get reference to the search form
const search = document.querySelector('.search input');

// generate template for li todo
const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center text-light">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    // add html li to the ul list
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    // console.log(todo);

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

// delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// filter todos
const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => {
            return !todo.textContent.includes(term);
            // console.log(todo.textContent);
        })
        .forEach((todo) => {
            todo.classList.add('filtered');
        });

    Array.from(list.children)
    .filter((todo) => {
        return todo.textContent.includes(term);
        // console.log(todo.textContent);
    })
    .forEach((todo) => {
        todo.classList.remove('filtered');
    });
};

// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});