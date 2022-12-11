import React from 'react'
import './Home.css'
import homeImage from './assets/homeImage.png'
function Home() {
  
  return (
    <div className='Main-page'>

        <div className="left-contend">
            <div className="text">
            <h5>Complete Software</h5>
            <h4>development</h4>
            <h4>outsourcing</h4>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eius expedita ratione dolorum eligendi blanditiis <span>voluptas architecto</span>? Vel, quia porro?</p>
        </div>
        <div className="right-contend">
           <img className='image' src={homeImage} alt="" />
        </div>

    </div>
  )
}

export default Home