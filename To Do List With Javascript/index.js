document.addEventListener("DOMContentLoaded", function () {
    const add = document.querySelector('#push');
    const task = document.querySelector('#task');
    const tasks = document.querySelector('#tasks');

    add.addEventListener('click', function () {
        if (task.value.length == 0) {
            alert("Please Enter a Task");
        } else {
            tasks.innerHTML += `
                <div class="task">
                    <span class="taskname">${task.value}</span>
                    <button class="delete">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;

            var current_tasks = document.querySelectorAll(".delete");
            for (var i = 0; i < current_tasks.length; i++) {
                current_tasks[i].addEventListener('click', function () {
                    this.parentNode.remove();
                });
            }

            var taskItems = document.querySelectorAll(".task");
            for (var i = 0; i < taskItems.length; i++) {
                taskItems[i].addEventListener('click', function () {
                    this.classList.toggle('completed');
                });
            }

            document.querySelector("#newTask input").value = "";
        }
    });
});