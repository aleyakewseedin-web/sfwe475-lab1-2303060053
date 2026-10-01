import {
  addTask,
  findTask,
  toggleTask,
  filterTasks,
  Task,
} from "./tasks";

let tasks: Task[] = [];

tasks = addTask(tasks, "Read Chapter 1");

const task = findTask(tasks, 1);

if (task) {
  console.log(task.title);
}

const missingTask = findTask(tasks, 99);

if (missingTask) {
  console.log(missingTask.title);
} else {
  console.log("Task not found");
}

tasks = toggleTask(tasks, 1);

console.log(filterTasks(tasks, "done"));