import React, { useContext } from 'react';
import { todoContext } from "../todo";

const BookDetails = ({todo})=>{
    const { dispatch } = useContext(todoContext);
    const  get = localStorage.getItem('Todos');
    const gets = JSON.parse(get);


    const updateState = () => {

        const updatedText = localStorage.getItem('updatedItem');
        console.log("updatedtext",updatedText);
        console.log(gets.length);

        for (var i=0;i<gets.length;i++){
            if(todo.id  === gets[i].id && todo.user === gets[i].user){
                console.log(todo.id, gets[i].id);
                console.log(todo.id,gets[i].id);
                gets[i].todo = updatedText;
                localStorage.setItem('Todos',JSON.stringify(gets));
            }
        }
    }
    return(
        <li>
            <div onClick={()=> dispatch({type:'REMOVE_TODO', id: todo.id})}>
            <div className="title">{todo.todo}</div>
            <div className="user">{todo.user}</div>
            </div>
            <button onClick={updateState} className="Text">Update</button>

        </li>


    )
}

export default BookDetails;
