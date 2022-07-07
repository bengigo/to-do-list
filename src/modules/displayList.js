import Task from "./taskClass.js";

export default function displayList() {
  const listContainer = document.querySelector("#list");
  const toDos = JSON.parse(localStorage.getItem("toDos") || "[]");
  if (toDos.length > 0) {
    toDos.forEach((task) => {
      listContainer.innerHTML += `
                            <li >
                              <div class="task-info">
                                <input type="checkbox" >
                                <input id="${task.index}" class="editable" value="${task.description}"></input>
                              </div>
                              <span id="${task.id}" class="delete material-symbols-outlined">delete</span>
                            </li>
                        `;
    });
  }
}
