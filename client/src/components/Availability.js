import React from 'react'

export default function Availability() {
  return (
    <>
        {/*  *************************************AVAILABILITY BOX********************************* */}


        <div style={{display: "flex", justifyContent: "center", width:"100%"}}>
            <div class="availability-box">
                <p class="availability-text">FROM</p><input class="availability-date-box" type="date"/>
                <p class="availability-text">TO</p><input class="availability-date-box" type="date"/>
                <button class="availability-btn">CHECK AVAILABILITY</button>		
            </div>
        </div>
    </>
  )
}
