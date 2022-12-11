import React, { useEffect, useState } from 'react'
import './Form.css'
import image from '../home/assets/homeImage.png'
import icon  from './assets/Vector.png'
import email from './assets/Vector (1).png'
import noti from './assets/Vector (2).png'
function Contend() {
  const [first, setfirst] = useState(false)
  useEffect(() => {
      window.addEventListener('scroll', () => {
      const isTop = window.scrollY;
      // console.log(isTop)
      if(isTop > 2700){
        // setfirst(true)
        // console.log("1")
      } else {
        // setfirst(false)
        // console.log("2")
      }
    }, true)
  }, [])
  
  return (
    <div className='form-container'>
      <div className="right-container">
            <h3>Contact us to schedule a meet <br/> <hr /></h3>
           
           <div className="info">
            <div className="email">
              <h4><img src={email} alt="" />Email us</h4>
              <p>enquery@yourdomain.com</p>
            </div>
            <div className="call">
            <h4><img src={noti} alt="" /> Call us</h4>
              <p>+91 98653782</p>
            </div>
           </div>
            <form className='form' action="" >
              <label htmlFor="Name">Name</label>
              <input type="name" placeholder='name' style={!first?{width:"35vmax"}:{maxWidth:"0px"}} />
              <label htmlFor="Name">Mobile no.</label>
              <input type="name" placeholder='34567890789' style={!first?{width:"35vmax"}:{maxWidth:"0px"}} />
              <label htmlFor="Name">Email</label>
              <input type="name" placeholder='sasaa@gmail.com' style={!first?{width:"35vmax"}:{maxWidth:"0px"}} />
              <button className='btn'>Submit</button>
            </form>
        </div>
        <div className="left-container">
            
        <img className='form-img' src={icon} alt="" />
        </div>
        
    </div>
  )
}

export default Contend