// import {Link} from 'react-router-dom'

import "./login.css"
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';


export default function Login(props) {
    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {

    const jwt = localStorage.getItem('token');
    try{
      const decodedUser = jwt_decode(jwt);
      props.setUser(decodedUser);
    } catch {}
    }, [])


    async function login(loginUser) {
      
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', loginUser);
        localStorage.setItem('token', response.data.access);
       
        navigate('/home/');
        if(response.status === 201){    
        
        };
        
    }

    async function handleSubmit(e){
        e.preventDefault();
        let loginUser = {
            username: username,
            password: password,
        }
        login(loginUser);
    };

    async function handleClick(e){
        e.preventDefault();
        navigate('/register/');
    }


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">YouTube Clone</h3>
                    <span className="loginDesc">Watch our videos</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <form onSubmit={handleSubmit}>
                            <input type='text' placeholder="User Name" required ='required' className="loginInput" onChange={(e) => setUsername(e.target.value)} defaultValue={username} />
                            <input type='text' placeholder="Password" required='required' className="loginInput" onChange={(e) => setPassword(e.target.value)} defaultValue={password}/>
                            <button className="loginButton">Log In</button>
                            <span className="loginForgot">Forgot Password</span>
                            <button className='loginRegisterButton' onClick={handleClick}> Register </button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


