import React from 'react'

export default function Div1Copy() {


  return (
    <>
        {/* <!-- ****************************************DIV1 COPY***************************** --> */}

        <div className="div1">
            <div className="left-div1">
                <div className="discount-div">
                    <button className="promo-btn">PROMO</button>
                    <input className="disc-field" type="text" placeholder="GET 20% DISCOUNT"/>
                </div>

                <p className="desc1">SLIKEE RESTRAUNT</p>
                <p className="desc2">HOTEL AND RESORT</p>	
                <button className="BookRoom-btn">BOOK SEAT</button>
            </div>

            <div className="right-div1 crousel-image-div" id='crousel-image-div'>
                <div className="right-div-box1">
                    <img src="https://wallpaperaccess.com/full/3014596.jpg" alt='img' width="100%" height="100%" style={{borderRadius: "5px"}}/>
                </div>
                <div className="right-div-box2">
                    <img src="https://s3.scoopwhoop.com/dan/spicyfood1/5.jpg" alt='img' width="100%" height="100%" style={{borderRadius: "5px"}}/>
                </div>
            </div>
        </div>
    </>
  )
}
