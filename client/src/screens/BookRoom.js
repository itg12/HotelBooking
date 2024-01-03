import React from 'react'
import Navbar from '../components/Navbar'

export default function BookRoom() {
  return (
        <>
            <Navbar/>
            {/* <form className='BookRoom-main-body'>
                <p className='BookRoom-main-title'>FILL THE CORRECT DETAILS</p>
            </form> */}

            <div className="BookRoom-main-div roomDetails-main-div">
                <div className="BookRoom-img-div roomImage-div">
                    <img className='BookRoom-img roomDetails-roomImgage' src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

                <div className="BookRoom-details-div roomDetails-div">
                    <center><p className="BookRoom-main-title roomDetails-title">FILL THE CORRECT DETAILS</p></center>
                    <center><input className='BookRoom-InputBox' type="text" placeholder='ROOM_ID: 85967423123' readOnly /></center><br></br>
                    <center><input className='BookRoom-InputBox' type="text" placeholder='ENTER YOUR NAME' maxLength="25"/></center><br></br>
                    <center><input className='BookRoom-InputBox' type="number" placeholder='ENTER PHONE NO.' maxLength="10"/></center><br></br>
                    <center><input className='BookRoom-InputBox' type="text" placeholder='ENTER FULL ADDRESS' maxLength="50" /></center><br></br>
                    <center><input className='BookRoom-InputBox' type="date" placeholder='From' /></center><br></br>
                    <center><input className='BookRoom-InputBox' type="date" placeholder='To'/></center><br></br>
                    <button className="roomDetails-book-btn"> BOOK </button>
                </div>
            </div>   
        </>  
    )
}
