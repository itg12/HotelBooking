import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'

export default function RoomDetails() {

    const [Room, setRoom] = useState([])
    useEffect(()=>{
        getRoom()
    },[])

    const getRoom=()=>{
        let p = fetch("http://localhost:7335/rooms/detail/6592f5b447096cda9fac6576")
  
        p.then((value1) => {
            return value1.json();
        }).then((data) => {
          setRoom(data)
        }).catch((err)=>console.log(err))
    }

  return (
   <>
      <Navbar/>
      <div className="roomDetails-main-div">
        <div className="roomImage-div">
          <img className='roomDetails-roomImgage' src={Room.image} alt="img" />
        </div>
          <div className="roomDetails-div">
            <p className="roomDetails-title">{Room.title}</p>
            <p className="roomDetails-title">RS.{Room.price}/-NIGHT</p>
            <div className="roomDetails-roomFacilities-and-rating">
              <div className="roomDetails-roomFacilities">
              {
                Room.facilities.map((value)=>{
                    const [...facilities]= value

                    return(
                        <p className="roomDetails-Desc"><span><img src='check-square.svg' alt=''/></span>{facilities}</p>
                    );
                })
              }
              </div>
              <div className="roomDetails-roomRating">
                <p className='roomDetails-ratingNo' style={{color:"white", fontWeight:"bold", fontSize:"25px"}}>{Room.rating}<span><img src="star-fill.svg" alt="" /></span></p>
              </div>
            </div>
            <button className="roomDetails-book-btn">BOOK ROOM</button>
          </div>
      </div> 
   </>
  )
}
