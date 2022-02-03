import "./register.css";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    let navigate = useNavigate();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[first_name, setFirstname] = useState('');
    const[last_name, setLastname] = useState('');
    const[newUser, setNewUser] = useState([]);


    async function regUser(newUser) {
      
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', newUser);
        if(response.status === 201){
        setNewUser(response.data);
        
        }
        
    };

    function handleSubmit(e){
        e.preventDefault();
        let newUser = {
            username: username,
            password: password,
            email: email,
            first_name: first_name,
            last_name: last_name,
        }
        regUser(newUser);
        console.log(newUser)
        navigate('/login/');
        
    };


    return (
        <>
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">YouTube Clone</h3>
                    <span className="registerDesc">Watch our videos</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <form onSubmit={handleSubmit}>
                            <input type='text' placeholder="Username" required='required' className="registerinInput" onChange={(e) => setUsername(e.target.value)} defaultValue={username} />
                            <input type='text' placeholder="Password" required='required' className="registerInput" onChange={(e) => setPassword(e.target.value)} defaultValue={password}/>
                            <input type='email' placeholder="Email" required='required' className="registerInput" onChange={(e) => setEmail(e.target.value)} defaultValue={email}/>
                            <input type='text' placeholder="First Name" required='required' className="registerInput" onChange={(e) => setFirstname(e.target.value)} defaultValue={first_name}/>
                            <input type='text' placeholder="Last Name" required='required' className="registerInput" onChange={(e) => setLastname(e.target.value)} defaultValue={last_name}/>
                            <button className="registerButton" type='submit' >Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
