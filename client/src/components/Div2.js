import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BaseUrl } from '../services/BaseUrl'


export default function Div2() {

  const host = window.location.hostname

  const [TopRooms, setTopRooms] = useState([])
  useEffect(()=>{
    getTopRooms()
  },[])

  const getTopRooms = () => {
    const p = fetch(`${BaseUrl}/toprooms`)
    p.then((res)=>{
      return res.json()
    }).then((data)=>{
      setTopRooms(data)
    }).catch((err)=>console.log(err))
  }

  return (
    <>
         {/* **************************************DIV2 SLIDING CARDS********************************* */}

        <p className="div2-topProducts desc1" style={{marginTop: "20px"}}>TOP ROOMS</p>

        <div className="div2">

            {
              TopRooms.map((values)=>{
                  const{_id, image, title, capacity, price}= values
                
                return(
                  <>
                    <div key={_id} className="rooms-card">
                      <img src={image} alt="img" width="100%" height="50%" style={{borderRadius: "5px"}}/>
                      <p className="div2-card-title">{title}</p>
                      <p className="div2-card-capacity">CAPACITY-{capacity}ADULTS</p>
                      <p className="div2-card-price div2-card-title">RS-{price}/-DAY</p>
                      {/* <center><Link to={`/rooms/detail/${_id}`}><button className="card2-view-btn">VIEW</button></Link></center> */}
                      <center><Link to={`/${_id}`}><button className="card2-view-btn">VIEW</button></Link></center>
                    </div> 
                  </>
                )
              })
            }
                                    
            <div className="rooms-card">
                <Link to='/rooms'><img src="next arrow.png" alt="img" width="100%" height="100%" style={{borderRadius: "5px"}}/></Link>
            </div>
        </div>
    </>
  )
}
