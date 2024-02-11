import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function CancellationForm() {
  const host = window.location.hostname

  const navigate= useNavigate()


  const [sendData, setSendData] = useState({
    roomID:"", bookingID:""
})

  const cancelBooking=()=>{
        let p = fetch(`http://${host}:7335/CancelBooking`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("Token"),
          },
          body: JSON.stringify({roomID:sendData.roomID, bookingID:sendData.roomID})
        })

        p.then((res)=>{
            res.json()
            if(res.status===502){
              Swal.fire("WARNING", `KINDLY FILL PROPER FIELD`, 'warning')  
              // navigate("/")
          }
            if(res.status===200){
                Swal.fire("SUCCESS", `CANCEL SUCCESSFULLY`, 'success')  
                // navigate("/")
            }
    
            if(res.status===404){
                Swal.fire("ERROR", `SOME ERROR OCCURED`, 'error')  
            } 
        }).catch((err)=>console.log(err))      
    }

    const handleInput=(e)=>{
      setSendData({...sendData, [e.target.name]:e.target.value})
    }
  return (
    <>

            <Navbar/>
              <div className='cancelPage'>
                <div className="BookRoom-details-div roomDetails-div cancel-form">
                    <center><p className="BookRoom-main-title roomDetails-title">BOOKING CANCELLATION</p></center>
                    <center><input className='BookRoom-InputBox' type="text" placeholder="ENTER YOUR ROOM ID"  name='roomID' value={sendData.roomID} onChange={handleInput}/></center><br></br>
                    <center><input className='BookRoom-InputBox' type="text" placeholder='ENTER YOUR BOOKING ID' name='bookingID' value={sendData.bookingID} onChange={handleInput}/></center><br></br>
                    <center><button className="submit-cancel" onClick={cancelBooking}>Submit</button></center>
                </div>
              </div>

              <div className='cancel-form-footer-div'>
                <Footer/>
              </div>   
    </>
  )
}
