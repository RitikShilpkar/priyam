import React from 'react'
import './Contend3.css'
import image from './assets/Vector.png'
function Contend() {
  return (
    <div className='container2'>
        <div className="left-container2">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/s4Tt0tWnVco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="right-container2">
          {/* <img className='icon2' src={image} alt="" /> */}
            <h3 className='h3'>We create Websites and mobile applications</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur aperiam, dolorem repudiandae totam necessitatibus vero cumque ad iusto doloribus?</p>
        </div>
    </div>
  )
}

export default Contend