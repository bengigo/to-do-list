import Task from "./taskClass.js";

export default function addToList() {
    const taskInput = document.querySelector('#task-input');
    const addIcon = document.querySelector('#add');
    const messageBox = document.querySelector('#message-display');
    messageBox.style.display = 'none';

    addIcon.addEventListener('click', () => {
      let toDos = [];
      toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
      if (taskInput.value !== '') {
        const newTask = new Task(taskInput.value);
        toDos.push(newTask);
        toDos.forEach((obj, i) => {
          obj.index = i + 1;
        });
        localStorage.setItem('toDos', JSON.stringify(toDos));
        taskInput.value = '';
        // window.location.reload();
      } else {
        messageBox.style.display = 'flex';
        messageBox.innerText = "You didn't write anything!";
        messageBox.style.color = 'tomato';
      }
      console.log('hey');
      console.log(toDos);
    });
}

// const taskInput = document.querySelector('#task-input');
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