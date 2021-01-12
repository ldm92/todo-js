
// import { TodoList } from "./class/todo-list.class.js";
// import { Todo } from "./class/todo.class.js";

import './styles.css';
import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ) );
todoList.todos.forEach( crearTodoHtml ); //es lo mismo que la linea de arriba

console.log('todos', todoList.todos);

// todoList.todos[0].imprimirClase();

// const tarea = new Todo('Aprender JavaScript!!');

// todoList.nuevoTodo( tarea );

// tarea.completado = true;

// console.log( todoList );

// crearTodoHtml( tarea );


// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout(() => {
    
//     localStorage.removeItem('mi-key');

// }, 1500);