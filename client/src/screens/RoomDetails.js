import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function RoomDetails(){

    const {id} = useParams()

    const host = window.location.hostname
    console.log(host)


    const [Room, setRoom] = useState([])
    const [Facilities, setFacilities] = useState([] )

    useEffect(()=>{
        getRoom()
    },[])

    const getRoom=()=>{
        let p = fetch(`http://${host}:7335/${id}`)
  
        p.then((value1) => {
            return value1.json();
        }).then((data) => {
          setRoom(data)
          setFacilities(data.facilities)
        }).catch((err)=>console.log(err))
    }

  return (
   <>
      <Navbar/>

      <div className="roomDetails-main-div">
        <div className="roomImage-div">
          {
            ((Room.image))?
            <img className='roomDetails-roomImgage' src={Room.image} alt="img" />
            :
            <p className="roomDetails-title">Loading</p>
          }
        </div>
          <div className="roomDetails-div">
            <p className="roomDetails-title">{Room.title}</p>
            <p className="roomDetails-title">RS.{Room.price}/-NIGHT</p>
            <div className="roomDetails-roomFacilities-and-rating">
              <div className="roomDetails-roomFacilities">
              {
                Facilities.map((data)=>         
                    (<p className="roomDetails-Desc"><span><img src='check-square.svg' alt=''/></span>&nbsp; {data}</p>)
                )
              }
              </div>
              <div className="roomDetails-roomRating">
                <p className='roomDetails-ratingNo' style={{color:"white", fontWeight:"bold", fontSize:"25px"}}>{Room.rating}<span><img src="star-fill.svg" alt="" /></span></p>
              </div>
            </div>
            <Link to={`/BookRoom/${id}`}><button className="roomDetails-book-btn">BOOK ROOM</button></Link>
          </div>
      </div> 
   </>
  )
}
