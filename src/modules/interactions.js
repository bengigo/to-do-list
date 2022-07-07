export default function interactions() {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((box) => {
    box.addEventListener('change', (e) => {
      let toDos = [];
      toDos = JSON.parse(localStorage.getItem('toDos') || '[]');

      toDos.forEach((obj) => {
        if (e.target.classList.contains(obj.index)) {
          obj.completed = true;
          localStorage.setItem('toDos', JSON.stringify(toDos));
        }
      });
    });
  });
}
