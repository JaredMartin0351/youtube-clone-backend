import './topbar.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


export default function Topbar(props) {

    
  
     async function handleSubmit(e){
        e.preventDefault();
        props.searchVideos();  
    };
    
    async function handleLogout(){
       
        localStorage.clear(props.token);
        
        console.log(props.token);
        window.location.replace('http://localhost:3000/login/');
    }

  

    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">YouTube Clone</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Search for friend, post or video' value={props.search} onChange={(e) => props.setSearch(e.target.value)} onSubmit={handleSubmit} className="searchInput" />
                        <button type='submit'>press me</button>
                    </form>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                </div>
                <div className="logoutBox" >
                    <button className="logoutButton" onClick={handleLogout}>Logout</button>
                </div> 
            </div>
        </div>
    )
    }
