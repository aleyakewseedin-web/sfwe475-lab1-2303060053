export type Task = { id: number; title: string; done: boolean; dueDate?: string };
export function addTask(tasks: Task[],  title: string): Task[] {
 const id = tasks.length + 1;
 return [...tasks, { id, title, done: false }];
}
export function findTask(tasks: Task[], id: number): Task | undefined {
 return tasks.find((t) => t.id === id);
}
export function daysUntilDue(task: Task): number {
  if (!task.dueDate) {
    return 0;
  }
 const due = new Date(task.dueDate);
 return Math.ceil((due.getTime() - Date.now()) / 86_400_000);
}


export function toggleTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id
      ? { ...task, done: !task.done }
      : task
  );
}

type TaskFilter = "all" | "done" | "open";

export function filterTasks(
  tasks: Task[],
  filter: TaskFilter
): Task[] {
  if (filter === "all") {
    return tasks;
  }

  if (filter === "done") {
    return tasks.filter((task) => task.done);
  }

  return tasks.filter((task) => !task.done);
}