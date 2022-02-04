export class TodoList {

    constructor() {

        this.todos = [];

    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id );

    }

    cambiarEstatusCompletado( id ) {

        const index = this.todos.findIndex( todo => todo.id == id );

        if ( index >= 0 ) {
            this.todos[ index ].completado = ! this.todos[ index ].completado;
        }

    }

    eliminarCompletados() {
        
        this.todos = this.todos.filter( todo => ! todo.completado );

    }

    guardarLocalStorage() {

    }

    cargarLocalStorage() {
        
    }

}


