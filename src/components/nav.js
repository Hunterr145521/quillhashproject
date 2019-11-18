import React, { useContext } from 'react';
import {todoContext} from "./todo";
import {authContext} from "./auth";
import {Link, Redirect} from 'react-router-dom';

const Navbar = () => {

    const {Todo} = useContext(todoContext);
    const {signOut} = useContext(authContext);
   const todoAlert = (e) => {
       e.preventDefault();
        signOut();
    }
    const user = localStorage.getItem('User');
    const filterTodo = Todo.filter(todo => {
        return todo.user === user
    });
    return(
        <div>
    <div className="Todo">
        <h1>
            Hey! {user}
        </h1>
        <p> You Have {filterTodo.length} left to work on...</p>
    </div>
            <div className="Login" onClick={todoAlert}>
                <button className="bt"><Link to='/'>Signout</Link></button>
            </div>
        </div>
    )
}

export default Navbar;