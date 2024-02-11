import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BaseUrl } from '../services/BaseUrl'
export default function Div3() {

    const host = window.location.hostname

    const [Rooms, setRooms] = useState([])
    useEffect(()=>{
      getRooms()
    },[])


    const getRooms=()=>{
      let p = fetch(`${BaseUrl}/rooms`)

      p.then((value1) => {
          return value1.json();
      }).then((data) => {
        setRooms(data)
      }).catch((err)=>console.log(err))
    }


  return (
    <>
         {/* ********************************************DIV3*************************************  */}

	
        <p className="div2-topRooms desc1" style={{marginTop: "20px"}}>POPULAR ROOMS</p>

        <div className="div3">
            {
                Rooms.slice(4,6).map((data)=>{
                const {_id, image, title, description, price}= data
                
                return(
                  <>
                    <Link to={`/${_id}`} style={{textDecoration:"none"}}>
                        <div key={_id} className="div3-popular-rooms-body">
                            <img className="div3-popular-rooms-img" src={image} alt='img'/>
                            <div className="div3-title-desc-div">
                                <p className="div3-title">{title}</p>
                                <p className="div3-desc">{description}</p>
                                <p className="div3-price div2-card-title" style={{textAlign: "right"}}>RS-{price}/-DAY</p>
                                <Link to={`/BookRoom/${_id}`}><button className="div3-book-btn">BOOK ROOM</button></Link>
                            </div>
                        </div>
                    </Link>
                  </>
                )
              })
            }          
            <center><Link to="/rooms"><button className="div3-explore-btn">EXPLORE MORE</button></Link></center>
        </div>

    </>
  )
}
