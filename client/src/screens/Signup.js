import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import { Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'


export default function Signup() {

    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        name:"", email:"", phone:"", password:""
    })

    const PostData = async (e)=>{
        e.preventDefault()
        const res = await fetch("http://localhost:7335/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"         
        },
        body: JSON.stringify({name:user.name, email:user.email, phone:user.phone, password:user.password})
    })

      const response = await res.json()

        if(res.status === 422){
            Swal.fire("Warning","User already Register","warning")            
        }

        if(res.status === 502){
          Swal.fire("Warning","Please fill the field properly","warning")            
        }

        if(res.status === 500){
          Swal.fire("Warning","Password Should be greater than 8 characters.","warning")            
        }

        if(res.status === 430){
            Swal.fire("error","Enter valid Email id","error")            
        }

        if(res.status === 404){
            Swal.fire("Error","Some Error Occured","error")            
        }


        if(res.status === 200 )
        {
            setUser({name:"", email:" ", phone:"", password:""})      
            Swal.fire("SUCCESS", `SIGNUP HAS BEEN SUCCESSFULL WITH ID:${response.id}`, 'success')  
            navigate("/login")           
        }
}

const handleInput = (e)=>{
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
                  <p className="login-left-div2-title1">HELLO USER<span><img src='person-raised-hand.svg' width={"30px"} height={"30px"} alt='fb_logo'/></span></p>
                  <p className='login-left-div2-title2'>FILL YOUR CORRECT INFORMATION</p>
                  <p className='login-left-div2-title2'>YOUR CREDENTIALS ARE SAFE</p>
                </div>      
              </div>

              <div className="login-right-div">
                <div className="login-right-title1-div">
                  <p className="login-left-div2-title1 ">SIGN UP</p>
                </div>
                <div className="login-right-form-div">
                  <div className="login-right-form-socialMediaIcons-div">
                    <button style={{backgroundColor:"transparent", border:"none"}}><img className='login-form-socialMediaicons' src='facebook2.svg' width={"30px"} height={"30px"} alt='fb_logo'/></button>
                    <button style={{backgroundColor:"transparent", border:"none"}}><img className='login-form-socialMediaicons' src='google.svg' width={"30px"} height={"30px"} alt='fb_logo'/></button>
                    <button style={{backgroundColor:"transparent", border:"none"}}><img className='login-form-socialMediaicons' src='instagram2.svg' width={"30px"} height={"30px"} alt='fb_logo'/></button>
                  </div>
                  <div className="login-form-emailBox">
                    <img src='person.svg' width={"30px"} height={"30px"} alt='name' style={{padding:"5px"}}/>
                    <input className='login-form-emailInput' type="text" required name="name" value={user.name} onChange={handleInput} placeholder='ENTER YOUR NAME' maxLength={25}/>
                  </div>
                  <div className="login-form-emailBox">
                    <img src='person-circle.svg' width={"30px"} height={"30px"} alt='email' style={{padding:"5px"}}/>
                    <input className='login-form-emailInput' type="email" required name="email"  value={user.email} onChange={handleInput} placeholder='ENTER YOUR EMAIL' maxLength={50}/>
                  </div>
                  <div className="login-form-emailBox">
                    <img src='phone.svg' width={"30px"} height={"30px"} alt='phone' style={{padding:"5px"}}/>
                    <input className='login-form-emailInput' type="number" required name="phone"  value={user.phone} onChange={handleInput} placeholder='ENTER YOUR MOBILE NO.' maxLength={25} />
                  </div>
                  <div className="login-form-passwordBox">
                    <img src='file-lock2.svg' width={"30px"} height={"30px"} alt='pass' style={{padding:"5px"}}/>
                    <input className='login-form-passwordInput' type="password" required name="password" value={user.password} onChange={handleInput} placeholder='ENTER YOUR PASSWORD' maxLength={50} />
                  </div>
                  <button className="login-form-login-btn" onClick={PostData}>SIGN UP</button> 
                  <p className='login-form-right-div-questionMark'>ALREADY REGISTER?<Link style={{textDecoration:'none'}} to="/login"><span style={{cursor:"pointer", fontWeight:"bold"}}>LOGIN</span></Link></p>
                </div>
              </div>
            </div> 
    </>
  )
}
