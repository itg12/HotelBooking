import React from 'react'

export default function Contact() {
  return (
    <>

        <div className='contact-main-div'>
            <div className="contact-left-div">
                <div className="title-aboutUs-div">
                    <p className="title-aboutUs">ABOUT US</p>
                </div>
                <p className="contact-left-div-title1">FOR ANY QUERY:</p>
                <p className="contact-left-div-title1">011-1800-6399</p>
                <p className="contact-left-div-title1">011-1800-6499</p>
                <p className="contact-left-div-title1">OR</p>
                <p className="contact-left-div-title1">YOU CAN SEND THE MESSAGE</p>
                <p className="contact-left-div-title1">BY FILLING THE DETAILS</p>
                <center>
                    <span>
                        <img src='facebook.svg' alt='' width={"30px"} height={"30px"} style={{padding:"10px"}}/>
                        <img src='whatsapp.svg' alt='' width={"30px"} height={"30px"} style={{padding:"10px"}}/>
                        <img src='instagram.svg' alt='' width={"30px"} height={"30px"} style={{padding:"10px"}}/>
                        <img src='twitter.svg' alt='' width={"30px"} height={"30px"} style={{padding:"10px"}}/>
                    </span>
                </center>
                <p className="contact-left-div-title1">ADDRESS</p>
                <p className="contact-left-div-title1">H-96, NEAR HINDON LAKE, MUMBAI</p>
            </div>
            <div className="contact-right-div">
                <div className="title-aboutUs-div">
                    <p className="title-aboutUs">CONTACT US</p>
                </div>
                <div className="contact-right-input-divs">
                    <input className='contact-inputFields' type="text" required placeholder='ENTER YOUR NAME'  name='' />
                    <input className='contact-inputFields' type="email" required  placeholder='ENTER YOUR EMAIL'  name='' />
                    <input className='contact-inputFields' type="number" maxLength="10" required placeholder='ENTER YOUR MOBILE NO.'  name='' />
                    <input className='contact-inputFields' type="textarea" maxLength="50" required placeholder='ENTER MESSAGE HERE'  name='' />
                    <button className='contact-send-btn'>SEND</button>
                </div>
            </div>
        </div>
    </>
  )
}
