import React from 'react';
import Navbar from '../nav';
import Todolist from '../TodoWork/todoList';
import TodoForm from '../TodoWork/todoForm';

function All() {
    return (
        <div className="App">
            <Navbar/>
            <Todolist/>
            <TodoForm/>
        </div>
    );
}

export default All;
