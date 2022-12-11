import React, { useEffect, useState } from 'react'
import './Contend2.css'
import image from '../home/assets/homeImage.png'
import icon  from './assets/Vector.png'
function Contend() {
  const [first, setfirst] = useState(true)
  useEffect(() => {
    
   let video = document.getElementById('v')
    window.addEventListener('scroll', () => {
    
      const isTop = window.scrollY;
      // console.log(video)
      if(isTop > 830){
       
        setfirst(false)
      } else {
      //  console.log("2")
        // video.style.opacity = first;
        setfirst(true)
      }
    }, true)
  
  }, [first])
  
  return (
    <div className='container1'>
      <div className="right-container1">
            <h3>founder message <br/> <hr /></h3>
            {/* <img className='icon' src={icon} alt="" /> */}
            <h3 className='about'>About the company that <br /> someone will explain</h3>
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur aperiam, dolorem repudiandae totam necessitatibus vero cumque ad iusto doloribus?</p>
        </div>
        <div className={`left-container1 ${ first ?'opacity':''}`} id='v'>
            
        <iframe width="560" height="315" className='video' src="https://www.youtube.com/embed/s4Tt0tWnVco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
    </div>
  )
}

export default Contend