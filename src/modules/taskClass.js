import toDos from "./tasks";

export default class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.id = Date.now().toString();
    this.index = toDos.length + 1;
  }

  static add() {
    const taskInput = document.querySelector("#task-input");
    const addIcon = document.querySelector("#add");
    const messageBox = document.querySelector('#message-display');
    messageBox.style.display = 'none';

    addIcon.addEventListener("click", () => {
      if (taskInput.value !== '') {
        const newTask = new Task(taskInput.value);
        toDos.push(newTask);
        console.log(toDos);
        localStorage.setItem('toDos', JSON.stringify(toDos));
        taskInput.value = '';
        messageBox.style.display = 'flex';
        messageBox.innerText = 'Added';
        messageBox.style.color = 'green';
      } else {
        messageBox.style.display = 'flex';
        messageBox.innerText = 'You didn\'t write anything!';
        messageBox.style.color = 'tomato';
      }
    });
  }

  static display() {
    const listContainer = document.querySelector("#list");

    const orderedTask = toDos.sort((a, b) => a.index - b.index);

    orderedTask.forEach((task, index) => {
      listContainer.innerHTML += `
            <li>
              <div class="task-info">
                <input type="checkbox" id="${orderedTask[index].index}">
                <label for="${orderedTask[index].index}">${orderedTask[index].description}</label>
              </div>
              <span class="material-symbols-outlined">more_vert</span>
            </li>
        `;
    });
  }
  //   check display function again

  static remove() {}
}
