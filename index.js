
const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
  ];

const listElem = document.querySelector('.list');
const todoListItems = tasks.map(({text, done}) => {
    const newItem = document.createElement('li');
    if(done){
        newItem.classList.add('list__item_done');
    }
    newItem.classList.add('list__item');
    const checkboxElem = document.createElement('input');
    checkboxElem.classList.add('list__item-checkbox');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.checked = done;
    newItem.append(checkboxElem, text);
    return newItem
});
listElem.append(...todoListItems)
  
  renderList(tasks);