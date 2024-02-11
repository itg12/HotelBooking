import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { BaseUrl } from '../services/BaseUrl'

export default function Contact() {

            const host = window.location.hostname

            const [Message, setMessage] = useState({
                name:"", email:"", phone:"", message:""
            })

            const SendMessage = async (e)=>{
                e.preventDefault()
                const res = await fetch(`${BaseUrl}/contact`, {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json"           
                    },
                    body: JSON.stringify({name:Message.name, email:Message.email, phone:Message.phone, message:Message.message})
                })
        
                if(res.status === 502){
                    Swal.fire("Warning","Please fill the field properly","warning")            
                }
        
                if(res.status === 430){
                    Swal.fire("error","Enter valid Email id","error")            
                }
        
                if(res.status === 404){
                    Swal.fire("Error","Some Error Occured","error")            
                }
        
                if(res.status === 200){
                    Swal.fire("SUCCESS", "MESSAGE SENT SUCCESSFULL", 'success')  
                    setMessage({name:"", email:" ", phone:"", message:""})        
                }
            }

        const handleInput = (e)=>{
            setMessage({...Message, [e.target.name]:e.target.value})
        }

  return (
    <>

        <div className='contact-main-div'>
            <div className="contact-left-div">
                <div className="title-aboutUs-div">
                    <p className="title-aboutUs">ABOUT US</p>
                </div>
                <p className="contact-left-div-title1">FOR ANY QUERY:</p>
                <p className="contact-left-div-title1">011-1800-6399</p>
                <p className="contact-left-div-title1">011-1800-6499</p>
                <p className="contact-left-div-title1">OR</p>
                <p className="contact-left-div-title1">YOU CAN SEND THE MESSAGE</p>
                <p className="contact-left-div-title1">BY FILLING THE DETAILS</p>
                <center>
                    <span>
                        <img src='facebook.svg' alt='' width={"30px"} height={"30px"} style={{padding:"10px"}}/>
                        <img src='whatsapp.svg' alt='' width={"30px"} height={"30px"} style={{padding:"10px"}}/>
                        <img src='instagram.svg' alt='' width={"30px"} height={"30px"} style={{padding:"10px"}}/>
                        <img src='twitter.svg' alt='' width={"30px"} height={"30px"} style={{padding:"10px"}}/>
                    </span>
                </center>
                <p className="contact-left-div-title1">ADDRESS</p>
                <p className="contact-left-div-title1">H-96, NEAR HINDON LAKE, MUMBAI</p>
            </div>
            <div className="contact-right-div">
                <div className="title-aboutUs-div">
                    <p className="title-aboutUs">CONTACT US</p>
                </div>
                <div className="contact-right-input-divs">
                    <input className='contact-inputFields' type="text" required placeholder='ENTER YOUR NAME'  name='name' value={Message.name} onChange={handleInput}/>
                    <input className='contact-inputFields' type="email" required  placeholder='ENTER YOUR EMAIL'  name='email' value={Message.email} onChange={handleInput}/>
                    <input className='contact-inputFields' type="number" required  placeholder='ENTER YOUR MOBILE NO.'  name='phone' value={Message.phone} onChange={handleInput}/>
                    <input className='contact-inputFields' type="text" maxLength="50" required placeholder='ENTER MESSAGE HERE'  name='message' value={Message.message} onChange={handleInput}/>
                    <button className='contact-send-btn' onClick={SendMessage}>SEND</button>
                </div>
            </div>
        </div>
    </>
  )
}
