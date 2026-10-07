import { addTask, findTask } from "./tasks";
import type {Task} from "./schemas";
import{TaskSchema} from "./schemas";
import { fetchTodo, fetchTodos } from "./api";
import { createTask } from "./createTask";

const valid = { id: 1, title: "Read", done: false };

const missingField = { id: 2, done: true };

const wrongType = { id: 3, title: "Write", done: "yes" };

for (const candidate of [valid, missingField, wrongType]) {
  const result = TaskSchema.safeParse(candidate);

  console.log(
    result.success,
    result.success ? "" : result.error.issues
  );
}


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

const validPayload = {
  id: 1,
  title: "Read",
  done: false,
};

const missingFieldPayload = {
  id: 2,
  done: true,
};

const wrongTypePayload = {
  id: 3,
  title: "Write",
  done: "yes",
};

function testCreateTask(payload: unknown) {
  const result = createTask(payload);

  if (result.ok) {
    console.log("Created task:", result.task);
  } else {
    console.log("Could not create task:", result.error);
  }
}
console.log("TESTING CREATE TASK");
 testCreateTask(validPayload);
  testCreateTask(missingFieldPayload);
  testCreateTask(wrongTypePayload);


async function main() {

 const todo = await fetchTodo(1);

  console.log(todo?.done);

 console.time("sequential");

  for (const id of [1, 2, 3, 4, 5]) {
    await fetchTodo(id);
  }

  console.timeEnd("sequential");

  console.time("parallel");

  await fetchTodos([1, 2, 3, 4, 5]);

  console.timeEnd("parallel");
}

main();