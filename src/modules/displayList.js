export default function displayList() {
  const listContainer = document.querySelector('#list');
  const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
  let checkedStatus = '';
  listContainer.innerHTML = '';
  toDos.forEach((task) => {
    if (task.completed === false) {
      checkedStatus = '';
    } else {
      checkedStatus = 'checked';
    }
    listContainer.innerHTML += `
                                 <li class="row">
                                   <div class="task-info">
                                     <input id="check${task.index}" class="checkbox" type="checkbox" ${checkedStatus}>
                                     <input id="${task.index}" class="editable" value="${task.description}"></input>
                                   </div>
                                   <span id="${task.id}" class="delete material-symbols-outlined">delete</span>
                                 </li>
                             `;
  });
}
