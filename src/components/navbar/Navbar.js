import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from './assets/Logo.png'
import menu from './assets/Vector (3).png'
function Navbar() {

  useEffect(() => {
     window.addEventListener('resize', (e) => {
          console.log(e.target.innerWidth)
          if(e.target.innerWidth < 500){
            document.querySelector('.navbar-right').style.display = 'none'
            document.querySelector('.menu').style.display = ''
          }
          else {
            document.querySelector('.navbar-right').style.display = 'flex'
            document.querySelector('.menu').style.display = 'none'
          }
    }, true)
    window.addEventListener('scroll', (e) => {
      console.log(window.scrollY)
     
}, true)
  }, [])
  const Onabout = () => {
    window.scrollTo(0, 650)
  }
  
  return (
    
      <div className="navbar">
          <div className="navbar-left">
           <div className="logo">
            <img src={logo} alt=""  />
            <h5>PRIYAM TECHNOLOGIES</h5>
           </div>
          </div>
          <img src={menu} alt="" style={{display:"none"}} className='menu'/>
          <div className="navbar-right">
           <ul>
            <li><a className='selected' href="">Home</a></li>
            <li><a  onClick={Onabout}>About Us</a></li>
            <li><a onClick={()=> window.scrollTo(0, 1400) }>Our Team</a></li>
            <li><a onClick={()=> window.scrollTo(0, 2700)}>ContactUs</a></li>
           </ul>
          </div>
      </div>
    
  )
}

export default Navbar