import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { BaseUrl } from '../services/BaseUrl'

export default function BookRoom() {

    // const host = window.location.hostname

    const navigate= useNavigate()


    // Fetch the Room data from get request which is selected by the user.

    const {id} = useParams()

    const [BookRoom, setBookRoom] = useState([])

    useEffect(()=>{
        getBookRoom()
    },[])

    const getBookRoom=()=>{
        let p = fetch(`${BaseUrl}/BookRoom/${id}`)
 
        p.then((value1) => {
            return value1.json();
        }).then((data) => {
          setBookRoom(data)
        }).catch((err)=>console.log(err))
    }



    // Send the Booking information into Database 


    const [sendData, setSendData] = useState({
        roomID:BookRoom._id, name:"", phone:"", from:"", to:""
    })

    const Booking = async (e)=>{
        e.preventDefault()
        const res = await fetch(`${BaseUrl}/BookingRoom`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("Token"),
        },
        body: JSON.stringify({roomID:BookRoom._id, name:sendData.name, phone:sendData.phone,from:sendData.from, to:sendData.to})
        })


        const response  = await res.json()

        if(res.status === 404){
            Swal.fire("Error","Some Error Occured Can Not Book","error")            
        }

        if(res.status === 401){
            Swal.fire("Warning","Kindly Login your account","warning")            
        }

        if(res.status === 402){
            Swal.fire("Warning","From should be less than To","warning")            
        }
        if(res.status === 406){
            Swal.fire("Warning","From and To should be greater than Current Date","warning")            
        }
        if(res.status === 400){
            Swal.fire("Warning","Please fill the field properly","warning")            
        }

        if(res.status===200){
            Swal.fire("SUCCESS", `BOOKING SUCCESSFULL WITH ID:${response.BookingId}`, 'success')  
            navigate("/")
        }
    }


    const handleInput=(e)=>{
        setSendData({...sendData, [e.target.name]:e.target.value})
    }

  return (
        <>
            <Navbar/>
            <div className="BookRoom-main-div roomDetails-main-div">
                <div className="BookRoom-img-div roomImage-div">
                    <img className='BookRoom-img roomDetails-roomImgage' src={BookRoom.image} alt="" />
                </div>

                <div className="BookRoom-details-div roomDetails-div">
                    <center><p className="BookRoom-main-title roomDetails-title">FILL THE CORRECT DETAILS</p></center>
                    <center><input className='BookRoom-InputBox' type="text" placeholder={BookRoom._id} readOnly name='roomID' value={BookRoom._id}/></center><br></br>
                    <center><input className='BookRoom-InputBox' type="text" placeholder='ENTER YOUR NAME' maxLength="25" name='name' value={sendData.name} onChange={handleInput}/></center><br></br>
                    <center><input className='BookRoom-InputBox' type="number" placeholder='ENTER PHONE NO.' maxLength="10" name='phone' value={sendData.phone} onChange={handleInput}/></center><br></br>
                    <center><input className='BookRoom-InputBox' type="date" placeholder='From'  name='from' value={sendData.from} onChange={handleInput}/></center><br></br>
                    <center><input className='BookRoom-InputBox' type="date" placeholder='To' name='to' value={sendData.to} onChange={handleInput}/></center><br></br>
                    <button className="roomDetails-book-btn" onClick={Booking}>BOOK</button>
                </div>
            </div>   
        </>  
    )
}
