import React from 'react'
import Navbar from '../components/Navbar'


export default function Bookings() {
  return (
    <>
        <Navbar/>
        <p className="div2-topProducts desc1" style={{marginTop: "0px",}}>YOUR BOOKINGS </p>
        <div className="roomDetails-main-div">
            <div className="roomImage-div">
                <img className='roomDetails-roomImgage' src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="roomDetails-div">
                <p className="roomDetails-title">SPYKAR ROOM FOUR SEATER</p>
                <p className="roomDetails-title">RS.2000/-NIGHT</p>
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
                    <p className='roomDetails-ratingNo' style={{color:"white", fontWeight:"bold", fontSize:"25px"}}>4.5<span><img src="star-fill.svg" alt="" /></span></p>
                </div>
                </div>
                <button className="roomDetails-book-btn">CANCEL</button>
            </div>
        </div>   
    </>
  )
}
