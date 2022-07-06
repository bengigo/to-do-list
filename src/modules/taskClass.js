import toDos from './toDos.js';

export default class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.id = Date.now().toString();
    this.index = toDos.length + 1;
  }

  //   static add() {
  //     const taskInput = document.querySelector('#task-input');
  //     const addIcon = document.querySelector('#add');
  //     const messageBox = document.querySelector('#message-display');
  //     messageBox.style.display = 'none';

  //     addIcon.addEventListener('click', () => {
  //       let toDos = [];
  //       toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
  //       if (taskInput.value !== '') {
  //         const newTask = new Task(taskInput.value);
  //         toDos.push(newTask);
  //         toDos.forEach((obj, i) => {
  //           obj.index = i + 1;
  //         });
  //         localStorage.setItem('toDos', JSON.stringify(toDos));
  //         taskInput.value = '';
  //         window.location.reload();
  //       } else {
  //         messageBox.style.display = 'flex';
  //         messageBox.innerText = "You didn't write anything!";
  //         messageBox.style.color = 'tomato';
  //       }
  //       console.log('hey');
  //       console.log(toDos);
  //     });
  //   }

  //   static display() {
  //     const listContainer = document.querySelector('#list');
  //     const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
  //     console.log(toDos);
  //     if (toDos.length > 0) {
  //       toDos.forEach((task) => {
  //         listContainer.innerHTML += `
  //                         <li>
  //                           <div class="task-info">
  //                             <input type="checkbox" id="${task.index}">
  //                             <label for="${task.index}">${task.description}</label>
  //                           </div>
  //                           <span class="material-symbols-outlined">more_vert</span>
  //                         </li>
  //                     `;
  //       });
  //     }
  //   }

  //   static remove() {}
}
