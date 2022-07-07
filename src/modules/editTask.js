// which file to import here?

export default function editTask() {
  const taskInfos = document.querySelectorAll(".editable");
  taskInfos.forEach((task) => {
    //make content editable and set yellow bg color
    task.addEventListener("click", () => {
      task.setAttribute("contenteditable", "true");
      task.style.backgroundColor = "yellow";

      //update ls object value
    });

    // set back to white bg color
    task.addEventListener("focusout", (e) => {
      task.style.backgroundColor = "white";
      let toDos = JSON.parse(localStorage.getItem("toDos") || "[]");
      //   console.log(task.value);

      toDos.forEach((obj) => {
        console.log('id is ' + obj.id);
        console.log('index is ' + obj.index);
        console.log(typeof(task.id));
        if(obj.index == task.id) {
            console.log(obj.description);
            console.log('goal is ' + task.value)
            obj.description = task.value;
            console.log('new value is ' + obj.description);
            console.log(obj);
            console.log(toDos);
            localStorage.setItem('toDos', JSON.stringify(toDos));

        }
        
      });
    });

    //update ls object value
  });
}
