import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../services/BaseUrl'
export default function Div4(props) {

    // const host = window.location.hostname

    const [Rooms, setRooms] = useState([])
    useEffect(()=>{
        getRooms()
    },[props])


    const getRooms=()=>{
        let p = fetch(`${BaseUrl}/rooms`)

        p.then((value1) => {
            return value1.json();
        }).then((data) => {
          setRooms(data)
          if(props.SearchQuery!==""){
            setRooms(data.filter((item)=>(item.title).toLowerCase().includes(props.SearchQuery)))
          }
          if(props.SortQuery==="lowToHigh"){           
            setRooms(data.sort((a,b)=>a.price-b.price))
          }
          if(props.SortQuery==="highToLow"){
            setRooms(data.sort((a,b)=>a.price-b.price).reverse())
          }
          if(props.FilterQuery){
            setRooms(data.filter((val)=>val.price<=props.FilterQuery || val.capacity==props.FilterQuery || val.rating==props.FilterQuery))
          }
          if(props.FilterQuery==='4star'){
            setRooms(data.filter((val)=>val.rating==4))
          }
          if(props.FilterQuery==='4.5star'){
            setRooms(data.filter((val)=>val.rating==4.5))
          }
          if(props.FilterQuery==='5star'){
            setRooms(data.filter((val)=>val.rating==5))
          }
        }).catch((err)=>console.log(err))
    }

    

  return (
    <>
         {/* ********************************************DIV3*************************************  */}

	
        <div className="div3">
            {
                Rooms.map((data)=>{
                    const {_id, image, title, description, price}= data

                    return(
                        <>
                            <Link to={`/${_id}`} style={{textDecoration:"none"}}>
                                <div key={_id} className="div3-popular-rooms-body">
                                    <img className="div3-popular-rooms-img" src={image} alt='img'/>
                                    <div3 className="div3-title-desc-div">
                                        <p className="div3-title">{title}</p>
                                        <p className="div3-desc">{description}</p>
                                        <p className="div3-price div2-card-title" style={{textAlign: "right"}}>RS-{price}/-DAY</p>
                                        <Link to={`/BookRoom/${_id}`}><button className="div3-book-btn">BOOK ROOM</button></Link>
                                    </div3>
                                </div>
                            </Link>
                        </>
                    )
                })
            }
        </div>   
    </>
  )
}
