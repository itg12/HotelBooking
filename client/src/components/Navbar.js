import React from 'react'
import {Link, useNavigate, NavLink} from 'react-router-dom'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { BaseUrl } from '../services/BaseUrl'

export default function Navbar() {

    const [Search, setSearch]= useState('')


    // const host = window.location.hostname


    // *******************************RESPONSIVE NAVBAR************************

    let openHamburger=()=>{
        let menubar = document.getElementById("Menubar")
        let hamburger1 = document.getElementById("hamburger1-btn")
        let hamburger2 = document.getElementById("hamburger2-btn")  
        menubar.style.right = "0";
        menubar.style.transition = "1s";
        hamburger1.style.display = "none";
        hamburger2.style.display = "block"; 
    }

    let closeHamburger=()=>{
        let menubar = document.getElementById("Menubar")
        let hamburger1 = document.getElementById("hamburger1-btn")
        let hamburger2 = document.getElementById("hamburger2-btn")
        menubar.style.right = "-150%";
        menubar.style.transition = "1s";
        hamburger1.style.display = "";  // This line is use to hide hamburger from full screen window
        hamburger2.style.display = "none";
    }

    const navigate = useNavigate()

    const handleLogOut= async (e)=>{
        e.preventDefault()
        let p = await fetch( `${BaseUrl}/logout`,{
            method:"POST",
            headers:{
                "token":localStorage.getItem("Token")
            }
        })
        
        localStorage.removeItem("Token")
        Swal.fire("Logout", "Logout Successfull", "success")
        navigate("/login")
    }

    // Handling Searchbar functionality

    const handleInput=(e)=>{
        setSearch(e.target.value)
    }

  return (
   <>


         {/* ***************************NAVBAR************************* */}

        <div className="navbar">
            <div className="hotel-name_and_logo">
                <img className="logo" src="SK.png" alt=""/>
                <p className="hotel-name">SLIKEE</p>
            </div>
            <div className="Menubar" id="Menubar">
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to='/rooms'>ROOMS</NavLink></li>
                    <li><NavLink to='/restraunt'>RESTRAUNT</NavLink></li>
                    <li><NavLink to='/facilities'>FACILITIES</NavLink></li>
                    {
                        (localStorage.getItem("Token"))?
                        <li><NavLink to='/bookings'>BOOKINGS</NavLink></li>                  
                        :""
                    }
                    {
                        (localStorage.getItem("Token"))?
                        <li><button className="login1-btn" onClick={handleLogOut}>LOGOUT</button></li>			
                        :
                        <li><Link to="/login"><button className="login1-btn">LOGIN</button></Link></li>	
                    }
                </ul>
            </div>
            <div className="searchbar">
                <input className="search-box" type="search" placeholder="Search.." value={Search} onChange={handleInput}/>
            </div>
            {          
                (!localStorage.getItem("Token")) ?      
                    <div className="login2">
                        <Link to="/login"><button className="login2-btn">LOGIN</button></Link>
                    </div>
                    :
                    <div className="login2">
                        <button className="login2-btn" onClick={handleLogOut}>LOGOUT</button>
                    </div>             
            }
            
            <button className="hamburger1-icon" id="hamburger1-btn" style={{background:"none", border: "none"}} onClick={openHamburger}>
                <img className="" src="list.svg" width="30px" height="40px" alt="img"/>
            </button>
            <button className="hamburger2-icon" id="hamburger2-btn" style={{background:"none", border: "none"}} onClick={closeHamburger}>
                <img className="" src="x-lg.svg" width="30px" height="40px" alt="img"/>
            </button>
        </div> 
   </>
  )
}
