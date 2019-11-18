import React, { useContext } from 'react';
import {todoContext} from "../todo";
import BookDetails from "./todoDetails";
const Todolist = ()=> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {Todo} = useContext(todoContext);
    //filter the todo using user name/
    const UserName = localStorage.getItem('User');
    const filterTodo = Todo.filter(todo => {
        return todo.user === UserName
    });

    return Todo.length ? (
        <div className="todo-list">
            <ul>
                {filterTodo.map(todo => {
                    return( <BookDetails todo={todo} key={todo.id}/>);
                })}
            </ul>
        </div>
    ):(
        <div className="empty">No Todo to read :)</div>
    )
}

export default Todolist;