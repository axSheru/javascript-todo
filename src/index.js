import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ) );
// Forma simplificada, si se maneja solo un argumento se manda por default a la función.
todoList.todos.forEach( crearTodoHtml );
