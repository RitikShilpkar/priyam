import React from 'react'
import './Footer.css'
import logo from './assets/Logo.png'
import path from './assets/Path.png'
import shape from './assets/Shape.png'
// import location from './assets/location.png'
function Footer() {
  return (
    <div className='footer'>
        <div className="uper-footer">
            <img src={logo} alt="" />
            <h5>PRIYAM TECHNOLOGIES</h5>
        </div>
        <div className="lower-footer">
            <div className="left-lower-footer">
                <p className='location'>
                    <img src={shape} alt="" /> <span>Location</span>
                </p>
                <h4>
                    1224 ayodhya nagar <br />
                    near khatipura railway station 
                
                </h4>
                <hr />
                <h4 className='timing'>
                    open from  7AM - 4AM on all 356 days
                </h4>
            </div>
            <div className="right-lower-footer">
                <div className="call-icon">
                    
                   
                </div>
            <h4>
            <img src={path} alt ="" />   phone
                <h3>+123 7236 112</h3>
                </h4>
                <h4>
                    Email
              
                <h3>booking.com@yourdomain.com</h3>
                </h4>
            </div>
        </div>
    </div>
  )
}

export default Footer