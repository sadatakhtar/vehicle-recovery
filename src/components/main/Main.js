import React from 'react'
import './Main.css';
import phone from '../../assets/phone.png';

function Main() {
    return (
        <div className="main_container">
            <div className="main_subheading">
                <h1>Rescue & Recovery</h1>
            </div>
            <div className="main_paragraph">
                <p>Our recovery vehicles are on standby 24/7. Call now for immediate dispatch. We recover any vehicle up to 7.5 tons.</p>
            </div>
            <div className="main_points">
                <h2>ROADSIDE RECOVERY | RAPID RESPONSE | FRIENDLY & PROFESSIONAL SERVICE </h2>
            </div>
            <div className="main_landline_container">
                <h1>CALL</h1>
                <img src={phone} width="50px" alt="phone" />
                <h1>0121 123 1234</h1>
               
            </div>
            
        </div>
    )
}

export default Main
