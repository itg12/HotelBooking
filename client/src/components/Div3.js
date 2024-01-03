import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
export default function Div3() {

    // ********************HANDLE LIKE BUTTON***************

    let like=(id)=>{
        let likeItem=  document.getElementById(id)
        if(likeItem.style.color==="red"){
            likeItem.style.color = "lightgray";           
        }
        else{
            likeItem.style.color = "red";
        }
    }


    const [Rooms, setRooms] = useState([])
    useEffect(()=>{
      getRooms()
    },[])


    const getRooms=()=>{
      let p = fetch("http://localhost:7335/rooms")

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
                Rooms.map((data)=>{
                const {_id, image, title, description, price}= data
                
                return(
                    <>
                        <div key={_id} className="div3-popular-rooms-body">
                            <img className="div3-popular-rooms-img" src={image} alt='img'/>
                            <div3 className="div3-title-desc-div">
                                <p className="div3-title">{title}</p>
                                <p className="div3-desc">{description}</p>
                                <p className="div3-price div2-card-title" style={{textAlign: "right"}}>RS-{price}/-DAY</p>
                                <Link to="/BookRoom"><button className="div3-book-btn">BOOK ROOM</button></Link>
                            </div3>
                            <button style={{width:"12px", height:"10px", border:"none"}}><i id={_id}  class="fa-solid fa-heart fa-xl like-btn-icon" onClick={(e)=>like(e.currentTarget.id)}></i></button>
                        </div>
                    </>
                )
            })
        }          
            <center><Link to="/rooms"><button className="div3-explore-btn">EXPLORE MORE</button></Link></center>
        </div>

    </>
  )
}
