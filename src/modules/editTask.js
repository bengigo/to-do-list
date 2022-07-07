export default function editTask() {
  const taskInfos = document.querySelectorAll('.editable');
  taskInfos.forEach((task) => {
    task.addEventListener('click', () => {
      task.setAttribute('contenteditable', 'true');
      task.style.backgroundColor = 'yellow';
    });

    task.addEventListener('focusout', () => {
      task.style.backgroundColor = 'white';
      const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
      toDos.forEach((obj) => {
        if (obj.index.toString() === task.id) {
          obj.description = task.value;
          localStorage.setItem('toDos', JSON.stringify(toDos));
        }
      });
    });
  });
}
