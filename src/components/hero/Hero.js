import React from 'react'
import hero from '../../assets/hero.jpg';
import phone from '../../assets/phone.png';
import tick from '../../assets/tick.png';
import './Hero.css';

function Hero() {
    return (
        <div className="hero_container">
            
            <div className="banner_image">
               
            </div>
          
           <div className="hero_textbox">
             
               <div className="hero_textbox_title">
                    <h1>Broken down? Need help?</h1>
               </div>
               <div className="hero_textbox_image">
                   <div className="hero_textbox_inner">
                   <img src={phone} width="60px" alt="phone"/>
                   <div className="hero_textbox_image_number">
                       <h2>0121 123 1234</h2>
                   </div>

                   </div>
                   
                 
                   <div className="ticks">
                       <div className="tick_one">
                           <img src={tick} width="30px"alt="tick"/>
                           <h3>Rapid response</h3>
                       </div>
                       <div className="tick_one">
                            <img src={tick} width="30px"alt="tick"/>
                           <h3>Friendly service</h3>
                       </div>
                       <div className="tick_one">
                            <img src={tick} width="30px" alt="tick"/>
                           <h3>Recovery</h3>
                       </div>
                   </div>
                   
               </div>
              

           </div>

            
        </div>
    )
}

export default Hero
