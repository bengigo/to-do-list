export default function displayList() {
  const listContainer = document.querySelector('#list');
  const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
  if (toDos.length > 0) {
    toDos.forEach((task) => {
      if (task.completed === false) {
        listContainer.innerHTML += `
                            <li >
                              <div class="task-info">
                                <input class="checkbox ${task.index}" type="checkbox">
                                <input id="${task.index}" class="editable" value="${task.description}"></input>
                              </div>
                              <span id="${task.id}" class="delete material-symbols-outlined">delete</span>
                            </li>
                        `;
      } else {
        listContainer.innerHTML += `
                            <li >
                              <div class="task-info">
                                <input checked class="checkbox ${task.index}" type="checkbox">
                                <input id="${task.index}" class="editable" value="${task.description}"></input>
                              </div>
                              <span id="${task.id}" class="delete material-symbols-outlined">delete</span>
                            </li>
                        `;
      }
    });
  }
}
