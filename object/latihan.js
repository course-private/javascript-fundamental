// LATIHAN

let todos = {
  tasks: ["Belajar Object", "Kerjakan Tugas"],

  showTasks: function () {
    // code here
    console.log("Task list:");
    for (let i = 0; i < this.tasks.length; i++) {
      console.log(`${i + 1}. ${this.tasks[i]}`);
    }
  },
  createTask: function (task) {
    // code here
    this.tasks.push(task);
    console.log(`Task "${task}" has been added.`);
  },
  deleteTask: function (task) {
    // code here
    let result = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] !== task) {
        result.push(this.tasks[i]);
      }
    }
    this.tasks = result;
  },
};

todos.createTask("Belajar Array");
todos.showTasks();

todos.deleteTask("Kerjakan Tugas");
todos.showTasks();
