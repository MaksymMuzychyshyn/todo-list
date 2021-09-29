const tasks = [
  { text: 'Buy milk', done: false, id: '1' },
  { text: 'Pick up Tom from airport', done: false, id: '2' },
  { text: 'Visit party', done: false, id: '3' },
  { text: 'Visit doctor', done: true, id: '4' },
  { text: 'Buy meat', done: true, id: '5' },
];
const listElem = document.querySelector('.list');
const renderListItems = listItems => {
  const listItemElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add(`list__item`);
      listItemElem.dataset.id = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkBoxElem = document.createElement('input');
      checkBoxElem.classList.add('list__item-checkbox');
      checkBoxElem.setAttribute('type', 'checkbox');
      checkBoxElem.checked = done;
      listItemElem.append(checkBoxElem, text);
      return listItemElem;
    });
  listElem.innerHTML = '';
  listElem.append(...listItemElems);
};
renderListItems(tasks);

const addTask = event => {
  const inputElem = document.querySelector('.task-input');
  if (inputElem.value === '') {
    return;
  }
  const task = {
    text: inputElem.value,
    done: false,
    id: `${tasks.length + 1}`,
  };
  tasks.push(task);
  inputElem.value = '';
  renderListItems(tasks);
};
const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', addTask);

const updateTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const currentItem = event.target.closest('.list__item');
  const currentTask = tasks.find(item => item.id === currentItem.dataset.id);
  currentTask.done = event.target.checked;
  renderListItems(tasks);
};

listElem.addEventListener('click', updateTask);