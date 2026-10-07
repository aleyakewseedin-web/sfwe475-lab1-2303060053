strand1-q(8)



the program continues running other program functions when the response is ready it goes back to the function and continues running it from await printing whatever response that is there



strand2-q(16)



TypeScript stayed silent because "response.json()" returns data that is treated as "any", so TypeScript trusted our claim that the result was a "Task". The real API response did not have a `done` property; it had a `completed` property instead. The mismatch became visible at runtime when todo.done printed `undefined`. This shows why trusting an API response without validating its shape can cause problems.



strand3-q(22)



false \[

&#x20; {

&#x20;   expected: 'string',

&#x20;   code: 'invalid\_type',

&#x20;   path: \[ 'title' ],

&#x20;   message: 'Invalid input: expected string, received undefined'

&#x20; }

]

false \[

&#x20; {

&#x20;   expected: 'boolean',

&#x20;   code: 'invalid\_type',

&#x20;   path: \[ 'done' ],

&#x20;   message: 'Invalid input: expected boolean, received string'

&#x20; }

]



* the first error is saying that there is a missing field in the schema "title".
* the second error is saying that that the type of value entered for one field is wrong supposed to be Boolean but instead received a string





strand 4-q(26)



unknown is the honest type because data has not been validated yet. We can not assume that incoming data is a valid Task just because we want it to be one. Using Task as the parameter type would repeat the earlier mistake where API data was treated as a Task even though its structure did not match the Task type. For example, the API used completed while our Task used done. TaskSchema.safeParse() is what checks whether the unknown data actually matches our Task structure.







