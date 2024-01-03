import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Facilities() {
  return (
    <>
        <Navbar/>
        <div className="facilities-main-div">
            <div className="facility-card">
                <img src="https://hotelxtoronto.com/_novaimg/4906918-1481330_0_0_2200_1200_2200_1200.rc.jpg" alt="Card image cap" alt="img" width={"100%"} height={"200px"} style={{borderRadius:"10px"}}/>
                <center><p className="roomDetails-title">HOTEL</p></center>
                <center><p className="roomDetails-Desc">ROOMS ARE AVAILABLE IN THE HOTEL ON THE SUTAIBLE PRICE.</p></center>
            </div>
            <div className="facility-card">
                <img src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" alt="img" width={"100%"} height={"200px"} style={{borderRadius:"10px"}}/>
                <center><p className="roomDetails-title">RESTRAUNT</p></center>
                <center><p className="roomDetails-Desc">BEST RESTRAUNT OF THIS PLACE FOR THE BEST CUSTOMERS.</p></center>
            </div>
            <div className="facility-card">
                <img src="https://st2.depositphotos.com/4695029/7141/i/450/depositphotos_71419053-stock-photo-beautiful-swimming-pool.jpg" alt="img" width={"100%"} height={"200px"} style={{borderRadius:"10px"}}/>
                <center><p className="roomDetails-title">RESORT</p></center>
                <center><p className="roomDetails-Desc">ROOMS ARE AVAILABLE IN THE HOTEL ON THE SUTAIBLE PRICE.</p></center>
            </div>
            <div className="facility-card">
                <img src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" width={"100%"} height={"200px"} style={{borderRadius:"10px"}}/>
                <center><p className="roomDetails-title">PARKING</p></center> 
                <center><p className="roomDetails-Desc">ROOMS ARE AVAILABLE IN THE HOTEL ON THE SUTAIBLE PRICE.</p></center>          
            </div>
            <div className="facility-card">
                <img src="https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" width={"100%"} height={"200px"} style={{borderRadius:"10px"}}/>
                <center><p className="roomDetails-title">TRANSPORT</p></center>
                <center><p className="roomDetails-Desc">ROOMS ARE AVAILABLE IN THE HOTEL ON THE SUTAIBLE PRICE.</p></center>
            </div>
            <div className="facility-card">
                <img src="https://images.pexels.com/photos/1378425/pexels-photo-1378425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" width={"100%"} height={"200px"} style={{borderRadius:"10px"}}/>
                <center><p className="roomDetails-title">SPORTS</p></center>
                <center><p className="roomDetails-Desc">ROOMS ARE AVAILABLE IN THE HOTEL ON THE SUTAIBLE PRICE.</p></center>
            </div>
        </div>
        <Footer/>
    </>
  )
}
