import React, { useState,useContext } from 'react';
import MobileLogo from '../svg/MobileDesign.svg';
import {authContext} from "./auth";
import {Link} from "react-router-dom";

const Login = () => {
    const { addUser } = useContext(authContext);
    const [Name, setName] = useState('');

    const ac = (e) => {
        e.preventDefault();
        addUser(Name);


    };
        return (
            <div className="Login box">
                <h1 className="Text">JoinYour TODO</h1>
                <input type="text" name="text" placeholder="Name" value={Name} onChange={(e)=>
                    setName(e.target.value)} required/>
                <div className="Logins" onClick={ac}>
                    <button className="bt" > <Link to='/All'>Login</Link></button>
                </div>
                <img src={MobileLogo} alt="Mobile Image" height ="90%" width="90%" className="MobileDesign"/>

            </div>
        );
    }


export default Login;