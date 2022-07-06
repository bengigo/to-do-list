import toDos from "../index.js";

export default function displayList() {
    const listContainer = document.querySelector('#list');

    const orderedTask = toDos.sort((a, b) => a.index - b.index);
    console.log(orderedTask);

    orderedTask.forEach((task, index) => {
        listContainer.innerHTML += `
            <li>
              <div>
                <input type="checkbox" id="${orderedTask[index].index}">
                <label for="${orderedTask[index].index}">${orderedTask[index].description}</label>
              </div>
              <span class="material-symbols-outlined">more_vert</span>
            </li>
        `;
    });
}