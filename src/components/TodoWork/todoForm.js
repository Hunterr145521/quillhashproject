import React , {useContext, useState } from 'react';
import {todoContext} from "../todo";
import {authContext} from "../auth";

const TodoForm = () => {
   const { dispatch } = useContext(todoContext);

   const [todo, setTodo] = useState('');
   const [inputScreen, setinputScreen] = useState(false);


     const User = localStorage.getItem('User');
   const user = User;
   const handleSubmit = (e) => {
       e.preventDefault();
       dispatch({type: 'ADD_TODO', book: {
               todo,user
           }});
       setTodo('');
   }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Whats your new Todo" value={todo} onChange={(e)=>
            setTodo(e.target.value)} required/>
            <input type="submit" value='add todo'/>
        </form>
    );
}
export default TodoForm;