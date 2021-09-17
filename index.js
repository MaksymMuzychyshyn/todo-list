const tasks = [
    { text: 'Buy ball', done: false },
    { text: 'Market place', done: false },
    { text: 'Buy now', done: false },
    { text: 'tiubiky', done: true },
  ];
  
  const renderList = tasksList => {
    const list = document.querySelector('.list');
    const elemetsList = tasksList
      .sort((a, b) => a.done - b.done)
      .map(({ text, done }) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list__item');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = done;
        if (done === true) listItem.classList.add('list__item_done');
        listItem.append(checkbox, text);
  
        return listItem;
      });
  
    list.append(...elemetsList);
  };
  
  renderList(tasks);