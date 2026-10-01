strand 2  

4\)

The ^ symbol means that npm can install newer compatible versions of the package, while keeping the same major version.



the three numbers represent the version of the software 

there is major:minor:patch



* change on the left number example: 7.0.2-->8.0.0

&#x20;  mean that there are big changes on the version 

* change on the second number : 7.0.2-->7.1.2

&#x20;   mean that small changes have been to version that do not affect; new features added but old version still functions well

* change in last number : 7.0.2-->7.0.3 

&#x20;   mean that bugs were fixed

strand 3



4\) error 1: tasks in index.ts does not have a specific type so when creating array TS does not know what kind of values to put in array



error 2: related to error 1; since tasks has no type so is treated as any\[]



error 3: in tasks.ts the parameter 'title' has no type  in the function :

&#x20; export function addTask(tasks: Task\[], title): Task\[] {

&#x20;const id = tasks.length + 1;

&#x20;return \[...tasks, { id, title, done: "false" }];

}    



error 4: in tasks.ts the type of object doesn't match the function ..

the function has a Boolean type parameter but the object has a different type of this parameter



error 5: related to error 4 it specifies this parameter in the add function which is 'done'... supposed to be boolean but represented as string in the object.



export type Task = { id: number; title: string; done: boolean; dueDate?: string };

export function addTask(tasks: Task\[], title): Task\[] {

&#x20;const id = tasks.length + 1;

&#x20;return \[...tasks, { id, title, done: "false" }];

}





error 6: relies in this part of code in tasks.ts

&#x20;  export function findTask(tasks: Task\[], id: number): Task {

&#x20;   return tasks.find((t) => t.id === id);

&#x20;  }  the function promises to return a task as seen after the colon.. however the find function can return an existing task or undefined task 



error 7: in tasks.ts: export type Task = { id: number; title: string; done: boolean; dueDate?: string };

&#x20; duedate here is said to be optional so can  have a value or be undefined but when called: const due = new Date(task.dueDate);

&#x20;duedate must have a value so causes a conflict

