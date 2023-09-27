import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {

    

    const handleHampburgerOpen = ()=>{    
        document.getElementById('menubar').style.display = "block";
    }

    const handleHampburgerClose = ()=>{      
        document.getElementById('menubar').style.display = "none";

    }


  return (
    <>
        <div className="sticky-top" style={{background:"rgba(0,0,0,0.8)",width:"100%", height:"auto", textAlign:"center" }}>
            <div>
                <p className='hotelName'>
                    <span style={{color:"yellow"}}>SHIROMANI KANIKA HOTEL</span>
                     

                    <button className='mx-2 my-1 border-0  openbtn' onClick={handleHampburgerOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" class="bi bi-list bg-light" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg></button>

                   
                </p>
                
            </div>

            <div id='menubar'>
                <ul>
                    <li>
                       <Link to="/" style={{color:"aqua", textDecoration: "none", fontWeight:"bold"}}>HOME</Link>
                    </li>
                    <li>
                       <Link to="/" style={{color:"aqua", textDecoration: "none", fontWeight:"bold"}}>ABOUT</Link>
                    </li>
                    <li>
                       <Link to="/" style={{color:"aqua", textDecoration: "none", fontWeight:"bold"}}>ROOMS</Link>
                    </li>
                    <li>
                       <Link to="/" style={{color:"aqua", textDecoration: "none", fontWeight:"bold"}}>FACILITIES</Link>
                    </li>
                    <li>
                       <Link to="/" style={{color:"aqua", textDecoration: "none", fontWeight:"bold"}}>LOGIN</Link>
                    </li>
                    <li>
                       <Link to="/" style={{color:"aqua", textDecoration: "none", fontWeight:"bold"}}>SIGNUP</Link>
                    </li>
                    <li>
                        <button className='border-0 bg-warning closebtn' onClick={handleHampburgerClose}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" class="bi bi-backspace-reverse" viewBox="0 0 16 16">
                            <path d="M9.854 5.146a.5.5 0 0 1 0 .708L7.707 8l2.147 2.146a.5.5 0 0 1-.708.708L7 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L6.293 8 4.146 5.854a.5.5 0 1 1 .708-.708L7 7.293l2.146-2.147a.5.5 0 0 1 .708 0z"/>
                            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.08a2 2 0 0 0 1.519-.698l4.843-5.651a1 1 0 0 0 0-1.302L10.6 1.7A2 2 0 0 0 9.08 1H2zm7.08 1a1 1 0 0 1 .76.35L14.682 8l-4.844 5.65a1 1 0 0 1-.759.35H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7.08z"/>
                            </svg>
                        </button> 
                    </li>
                </ul>
            </div>
        </div>
        
    </>
  )
}
