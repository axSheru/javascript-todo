// Referencias HTML.

import { todoList } from "..";
import { Todo } from "../classes";

const divTodoList = document.querySelector( '.todo-list' );
const txtInput = document.querySelector( '.new-todo' );
const btnBorrarCompletados = document.querySelector( '.clear-completed' );
const ulFiltros = document.querySelector( '.filters' );

export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ todo.completado ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ todo.completado ? 'checked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement( 'div' );
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

};


// Eventos.

txtInput.addEventListener( 'keyup', ( event ) => {

    if ( event.keyCode === 13 && txtInput.value.trim().length > 0 ) {

        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );

        txtInput.value = '';

    }

});

divTodoList.addEventListener( 'click', ( event ) => {

    const nombreElemento = event.target.localName;// Input, label, button...
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute( 'data-id' );

    if ( nombreElemento.includes( 'input' ) ) {// Click en el checkbox.

        todoList.cambiarEstatusCompletado( todoId );
        todoElemento.classList.toggle( 'completed' );

    } else if ( nombreElemento.includes( 'button' ) ) {// Click en el input.

        todoList.eliminarTodo( todoId );
        todoElemento.classList.toggle( 'completed' );
        divTodoList.removeChild( todoElemento );

    }

});

btnBorrarCompletados.addEventListener( 'click', ( event ) => {

    todoList.eliminarCompletados();
    
    for ( let i = divTodoList.children.length - 1; i >= 0; i-- ) {

        const elemento = divTodoList.children[ i ];

        elemento.classList.contains( 'completed' ) ? divTodoList.removeChild( elemento ) : '';

    }

});

ulFiltros.addEventListener( 'click', ( event ) => {

    const filtro = event.target.text;

    if ( ! filtro ) return;

    for ( const elemento of divTodoList.children ) {
        
        elemento.classList.remove( 'hidden' );
        const completado = elemento.classList.contains( 'completed' );
        console.log(completado);

        switch ( filtro ) {
            case 'Pendientes':
                ( completado ) ? elemento.classList.add( 'hidden' ) : '';

                break;

            case 'Completados':
                ( ! completado ) ? elemento.classList.add( 'hidden' ) : '';

                break;
        }

    }

});

