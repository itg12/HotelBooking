import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BaseUrl } from '../services/BaseUrl'


export default function CancellationForm() {
  // const host = window.location.hostname

  const navigate= useNavigate()


  const [SendData, setSendData] = useState({
    RoomId:"", BookingId:""
  })

  const cancelBooking=(e)=>{
        e.preventDefault()
        let p = fetch(`${BaseUrl}/CancelBooking`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("Token"),
          },
          body: JSON.stringify({RoomId:SendData.RoomId, BookingId:SendData.BookingId})
        })

        p.then((res)=>{
            console.log(res)
            if(res.status===502){
              Swal.fire("WARNING", `KINDLY FILL THE PROPER FIELDS`, 'warning')  
            }
            if(res.status===200){
                Swal.fire("SUCCESS", `BOOKING CANCEL SUCCESSFULLY`, 'success')  
                navigate("/")
            }
    
            if(res.status===404){
                Swal.fire("ERROR", `SOME ERROR OCCURED`, 'error')  
            } 
        }).catch((err)=>console.log(err))      
    
    }
    
    const handleInput=(e)=>{
      setSendData({...SendData, [e.target.name]:e.target.value})
    }
  return (
    <>

            <Navbar/>
              <div className='cancelPage'>
                <div className="BookRoom-details-div roomDetails-div cancel-form">
                    <center><p className="BookRoom-main-title roomDetails-title">BOOKING CANCELLATION</p></center>
                    <center><input className='BookRoom-InputBox' type="text" placeholder="ENTER YOUR ROOM ID"  name='RoomId' value={SendData.RoomId} onChange={handleInput}/></center><br></br>
                    <center><input className='BookRoom-InputBox' type="text" placeholder='ENTER YOUR BOOKING ID' name='BookingId' value={SendData.BookingId} onChange={handleInput}/></center><br></br>
                    <center><button className="submit-cancel" onClick={cancelBooking}>Submit</button></center>
                </div>
              </div>

              <div className='cancel-form-footer-div'>
                <Footer/>
              </div>   
    </>
  )
}
