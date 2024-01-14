import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Navbar() {

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

    const handleLogOut=()=>{
        localStorage.removeItem("Token")
        Swal.fire("Logout", "Logout Successfull", "success")
        navigate("/login")
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
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to='/rooms'>ROOMS</Link></li>
                    <li><Link to='/restraunt'>RESTRAUNT</Link></li>
                    <li><Link to='/facilities'>FACILITIES</Link></li>
                    {
                        (localStorage.getItem("Token"))?
                        <li><Link to='/bookings'>BOOKINGS</Link></li>                  
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
                <input className="search-box" type="search" placeholder="Search.."/>
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