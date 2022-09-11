export default function interactions() {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((box) => {
    box.addEventListener('click', (e) => {
      let toDos = [];
      toDos = JSON.parse(localStorage.getItem('toDos') || '[]');

      toDos.forEach((obj) => {
        if ((e.target.id === `check${obj.index}`) && (obj.completed === false)) {
          obj.completed = true;
          e.target.checked = true;
          localStorage.setItem('toDos', JSON.stringify(toDos));
        } else if ((e.target.id === `check${obj.index}`) && (obj.completed === true)) {
          obj.completed = false;
          e.target.checked = false;
          localStorage.setItem('toDos', JSON.stringify(toDos));
        }
      });
    });
  });
}
