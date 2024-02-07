import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'


export default function Login() {

  const host = window.location.hostname

  const navigate = useNavigate()

  const [user, setUser] = useState({
      email:"", password:""
  })

  const PostData = async (e)=>{
      e.preventDefault()
      const res = await fetch(`http://${host}:7335/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email:user.email, password:user.password})       
      })


      const response  = await res.json()

      if(res.status === 500){
        Swal.fire("error", "Please fill the proper field", "error")
      }

      if(res.status === 422){
          Swal.fire("error", "Invalid details", "error")
      }

      if(res.status === 200){         
          localStorage.setItem("Token", response.Token)
          Swal.fire("SUCCESS", "LOGIN SUCCESSFULLY", 'success')  
          navigate("/")
      }
  }


  const handleInput= (e)=>{
      setUser({...user, [e.target.name]:e.target.value})
  }
  
  return (
    <>
        <Navbar/>
            <div className='login-main-body'>
              <div className="login-left-div">
                <div className="login-left-div1 hotel-name_and_logo">
                  <img className="logo" src="SK.png" alt="img"/>
                  <p className="hotel-name">SLIKEE</p>
                </div>   
                <div className="login-left-div2">
                  <p className="login-left-div2-title1">WELCOME BACK AGAIN</p>
                  <p className='login-left-div2-title2'>FILL YOUR CORRECT INFORMATION</p>
                  <p className='login-left-div2-title2'>KEEP HIDE YOUR CREDENTIALS</p>
                </div>      
              </div>

              <div className="login-right-div">
                <div className="login-right-title1-div">
                  <p className="login-left-div2-title1">LOG IN</p>
                </div>
                <div className="login-right-form-div">
                  <div className="login-right-form-socialMediaIcons-div">
                    <button style={{backgroundColor:"transparent", border:"none"}}><img className='login-form-socialMediaicons' src='facebook2.svg' width={"30px"} height={"30px"} alt='fb_logo'/></button>
                    <button style={{backgroundColor:"transparent", border:"none"}}><img className='login-form-socialMediaicons' src='google.svg' width={"30px"} height={"30px"} alt='fb_logo'/></button>
                    <button style={{backgroundColor:"transparent", border:"none"}}><img className='login-form-socialMediaicons' src='instagram2.svg' width={"30px"} height={"30px"} alt='fb_logo'/></button>
                  </div>
                  <div className="login-form-emailBox">
                    <img src='person-circle.svg' width={"30px"} height={"30px"} alt='email' style={{padding:"5px"}}/>
                    <input className='login-form-emailInput' type="email" required name="email" value={user.email} onChange={handleInput} placeholder='ENTER YOUR EMAIL' />
                  </div>
                  <div className="login-form-passwordBox">
                    <img src='file-lock2.svg' width={"30px"} height={"30px"} alt='pass' style={{padding:"5px"}}/>
                    <input className='login-form-passwordInput' type="password" required name="password" value={user.password} onChange={handleInput} placeholder='ENTER YOUR PASSWORD' />
                  </div>
                  <button className="login-form-login-btn" onClick={PostData}>LOG IN</button> 
                  <p className='login-form-right-div-questionMark'>DON'T HAVE ANY ACCOUNT?<Link style={{textDecoration:'none'}} to="/signup"><span style={{cursor:"pointer", fontWeight:"bold", textDecoration:"none"}}>SIGNUP</span></Link></p>
                </div>
              </div>
            </div>
    </>
  )
}
