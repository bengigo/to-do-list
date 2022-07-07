export default function clearCompleted() {
    const clearButton = document.querySelector('#clear');
    
    clearButton.addEventListener('click', (e) => {
        e.preventDefault();

        let toDos = [];
        toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
        toDos = toDos.filter((task) => task.completed !== true);

        localStorage.setItem('toDos', JSON.stringify(toDos));

        window.location.reload();


        console.log(toDos);

    })
}