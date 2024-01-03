import React from 'react'
import Navbar from '../components/Navbar'
import Div1 from '../components/Div1'
import Availability from '../components/Availability'
import Div2 from '../components/Div2'
import Div3 from '../components/Div3'
import Contact from '../components/Contact'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <>
        <Navbar/>
        <Div1/>
        <Availability/>
        <Div2/>
        <Div3/>
        <Contact/>
        <Footer/>
    </>
  )
}
