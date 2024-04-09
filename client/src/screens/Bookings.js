import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {BaseUrl} from '../services/BaseUrl'




export default function Bookings() {

    // const host = window.location.hostname


    const [Bookings, setBookings]=useState([])
    useEffect(()=>{
        findBookings()
    },[])
    
    const findBookings=()=>{
        let p = fetch(`${BaseUrl}/my_bookings/bookings`,{
            method:"GET",
            headers:{
                "token": localStorage.getItem("Token")
            }
        })

        p.then((value1) => {
            return value1.json();
        }).then((data) => {
          setBookings(data.roomData)
        }).catch((err)=>console.log(err))
       
    }


  return (
    <>
        <Navbar/>
        <p className="div2-topProducts desc1" style={{marginTop: "0px",}}>MY BOOKINGS </p>
        {
            (Bookings)?
            Bookings.map((rooms)=>{
                const{_id, image, title, price, rating} = rooms

                return(
                    <>
                        <div key={_id} className="roomDetails-main-div">
                            <div className="roomImage-div">
                                <img className='roomDetails-roomImgage' src={image} alt="" />
                            </div>
                            <div className="roomDetails-div">
                                <p className="roomDetails-title">{title}</p>
                                <p className="roomDetails-title">RS.{price}/-NIGHT</p>
                                <div className="roomDetails-roomFacilities-and-rating">
                                <div className="roomDetails-roomFacilities">
                                    <p className="roomDetails-Desc"><span><img src='check-square.svg' alt='checks'/></span> 500 SQUARE FEET ROOM AREA</p>
                                    <p className="roomDetails-Desc"><span><img src='check-square.svg' alt='checks'/></span> ATTACHED WASHROOM</p>
                                    <p className="roomDetails-Desc"><span><img src='check-square.svg' alt='checks'/></span> 2-TWO SEATER BED</p>
                                    <p className="roomDetails-Desc"><span><img src='check-square.svg' alt='checks'/></span> LED WITH HIGH BASS SOUND</p>
                                    <p className="roomDetails-Desc"><span><img src='check-square.svg' alt='checks'/></span> FULLY AC ROOM</p>
                                    <p className="roomDetails-Desc"><span><img src='check-square.svg' alt='checks'/></span> ENTERTAINMENT GAMES</p>
                                </div>
                                <div className="roomDetails-roomRating">
                                    <p className='roomDetails-ratingNo' style={{color:"white", fontWeight:"bold", fontSize:"25px"}}>{rating}<span><img src="star-fill.svg" alt="" /></span></p>
                                </div>
                                </div>
                                {/* <button className="roomDetails-book-btn" onClick={()=> cancelBooking(_id)}>CANCEL</button> */}
                                <Link to="/cancelBooking" ><button className="roomDetails-book-btn">CANCEL</button></Link>
                            </div>
                        </div>   
                    </>
                )
            })
            :
            ""
        }      
    </>
  )
}
