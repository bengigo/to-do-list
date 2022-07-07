import Task from "./taskClass.js";

export default function displayList() {
  const listContainer = document.querySelector("#list");
  const toDos = JSON.parse(localStorage.getItem("toDos") || "[]");
  if (toDos.length > 0) {
    toDos.forEach((task) => {
      listContainer.innerHTML += `
                            <li >
                              <div class="task-info">
                                <input type="checkbox" id="${task.index}">
                                <label for="${task.index}">${task.description}</label>
                              </div>
                              <span id="${task.id}" class="delete material-symbols-outlined">delete</span>
                            </li>
                        `;
    });
  }
}

// export default function displayList() {
//   const listContainer = document.querySelector('#list');

//   const orderedTask = toDos.sort((a, b) => a.index - b.index);

//   orderedTask.forEach((task, index) => {
//     listContainer.innerHTML += `
//             <li>
//               <div class="task-info">
//                 <input type="checkbox" id="${orderedTask[index].index}">
//                 <label for="${orderedTask[index].index}">${orderedTask[index].description}</label>
//               </div>
//               <span class="material-symbols-outlined">more_vert</span>
//             </li>
//         `;
//   });
// }
