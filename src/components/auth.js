import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const authContext = createContext();

const AuthContextProvider = (props) => {
    const [Auth,SetAuth] = useState([
        {isauth: false}
    ]);
    const [User,setUser] = useState([
        {Name: ''}
    ]);
    const addUser = (name) => {

        SetAuth(true);
        setUser(Auth.isauth ? User.name: name);

    };
    const signOut = () =>{
        setUser('');
        SetAuth(false);
    };
    console.log(User);
    localStorage.setItem('User',User);
    localStorage.setItem('isAuth',Auth);
    console.log(Auth);
    return(
        <authContext.Provider value={{User,addUser,signOut}}>
            {props.children}
        </authContext.Provider>
    )
};
export default AuthContextProvider;


