import './styles.css';

import { Todo, TodoList } from './classes';

const todoList = new TodoList();

const tarea = new Todo( 'Tomar medicina.' )
const tarea2 = new Todo( 'Comprar curso.' )

todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );

console.log( todoList );
