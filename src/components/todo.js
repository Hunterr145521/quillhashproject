import React, { createContext, useReducer, useEffect } from 'react';
import {todoReducers} from "../reducers/todoReducers";

export const todoContext = createContext();

const TodoContextProvider = (props) => {
  const [Todo,dispatch] = useReducer(todoReducers,[],
      ()=>{
      const lcData = localStorage.getItem('Todos');
      return lcData ? JSON.parse(lcData) : [];
      });
    useEffect(()=>{
        localStorage.setItem('Todos',JSON.stringify(Todo))
    }, [Todo]);
    return(
        <todoContext.Provider value={{Todo,dispatch}}>
            {props.children}
        </todoContext.Provider>
    )
};
export default TodoContextProvider;


