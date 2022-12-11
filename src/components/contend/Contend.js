import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Contend.css'
import image from '../home/assets/homeImage.png'
import image2 from './assets/Group 904.svg'
// import {gsap} from 'gsap';
// import ScrollTrigger from 'gsap-trial/src/ScrollTrigger';
// import ScrollTrigger from 'gsap/ScrollTrigger';
function Contend() {
const [first, setfirst] = useState(false)
  useEffect(() => {
    let a =  document.getElementById('two')
    
    window.addEventListener('scroll', (e) => {
      const isTop = window.scrollY;
    
      // console.log(b)
      // console.log(a)
      // console.log("sss", document.querySelector('.right-container'))
       if(isTop > 700){
        a.style.right = isTop * -1.5 + 900 + 'px';
         setfirst(true)
       } else {
        document.querySelector('.q').style.right = 0;
          setfirst(false)
        }
    }, true)
  }, [])
  
  return (
    <>
    <div className='container'>
      
      
        <div className="left-container">
            <h3 className='l'>Our Features <br /> <hr /></h3>
            <div  className={`ex ${first ? 'animation' : ''}` }></div>
        {/* <img  className='ex' src={image2} alt="" /> */}
        </div>
        <div id='two' className="right-container q" >
         
            <h3>We create Websites and mobile applications</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur aperiam, dolorem repudiandae totam necessitatibus vero cumque ad iusto doloribus?</p>
        </div>
    </div>
    </>
  )
}





// gsap.registerPlugin(ScrollTrigger);
//   useLayoutEffect(() => {
//     console.log(boxRef) 
//     gsap.fromTo(boxRef.current, {
//       // rotation: "+=360"
//       rotate: 360,
//       duration: 2,
//       ease: "bounce",
//       y: 100,
//       opacity: 0,
//       scale: 0.5,
//       delay: 1,

//     },{
//       rotate: 0,
//       duration: 2,
//       ease: "bounce",
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       delay: 1,
//       scrollTrigger: {
//         trigger: document.querySelector(".left-container"),
//         start: "top top",
//         end: "bottom center",
//         scrub: true,
//       },

//     });
//     gsap.fromTo(boxRef2.current, {
//       // rotation: "+=360"
//       // rotate: 360,
//       duration: 2,
//       ease: "bounce",
//       // y: 100,
//       opacity: 0,
//       scale: 0.5,
//       delay: 1,

//     },{
//       // rotate: 0,
//       duration: 2,
//       ease: "bounce",
//       // y: 0,
//       opacity: 1,
//       scale: 1,
//       delay: 1,
//       scrollTrigger: {
//         trigger: document.querySelector(".left-container"),
//         start: "top top",
//         end: "bottom center",
//         scrub: true,
//       },

//     });
//   });

export default Contend