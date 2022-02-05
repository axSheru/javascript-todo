import { Todo } from ".";

export class TodoList {

    constructor() {

        this.cargarLocalStorage();

    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();

    }

    cambiarEstatusCompletado( id ) {

        const index = this.todos.findIndex( todo => todo.id == id );

        if ( index >= 0 ) {
            this.todos[ index ].completado = ! this.todos[ index ].completado;
            this.guardarLocalStorage();
        }

    }

    eliminarCompletados() {
        
        this.todos = this.todos.filter( todo => ! todo.completado );
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem( 'todo', JSON.stringify( this.todos ) );

    }

    cargarLocalStorage() {

        this.todos = ( localStorage.getItem( 'todo' ) )
            ? JSON.parse( localStorage.getItem( 'todo' ) )
            : [];

        this.todos = this.todos.map( Todo.fromJson );
        
    }

}


