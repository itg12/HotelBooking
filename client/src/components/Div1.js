import React from 'react'
import { Link } from 'react-router-dom'

export default function Div1() {
  return (
    <>
        {/* <!-- ****************************************DIV1***************************** --> */}

        <div className="div1">
            <div className="left-div1">
                <div className="discount-div">
                    <button className="promo-btn">PROMO</button>
                    <input className="disc-field" type="text" placeholder="GET 20% DISCOUNT"/>
                </div>

                <p className="desc1">SLIKEE HOTEL</p>
                <p className="desc2">RESORT AND RESTRAUNT</p>	
                <Link to={'/rooms'}><button className="BookRoom-btn">BOOK ROOM</button></Link>
            </div>

            <div className="right-div1">
                <div className="right-div-box1">
                    <img src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img' width="100%" height="100%" style={{borderRadius: "5px"}}/>
                </div>
                <div className="right-div-box2">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img' width="100%" height="100%" style={{borderRadius: "5px"}}/>
                </div>
            </div>
        </div>
    </>
  )
}
