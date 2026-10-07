import { TaskSchema, type Task } from "./schemas";
export async function fetchTodo(id: number): Promise<Task | null> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    const result = TaskSchema.safeParse(data);

    if (!result.success) {
      return null;
    }

    return result.data;
  } catch {
    return null;
  }
}

export async function fetchTodos(ids: number[]) {
  return Promise.all(ids.map((id) => fetchTodo(id)));
}