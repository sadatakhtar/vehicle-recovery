import React from 'react'
import './Header.css';
import logo from '../../assets/logo.jpeg';
import phone from '../../assets/phone.png';
 

function Header() {
    return (
        <div className="header_container">
            <div className="header_logo">
                <img src={logo} width="100px" alt="logo"/>
            </div>
            <div className="header_title">
                <h1>VEHICLE RECOVERY</h1>
            </div>
            <div className="header_contact">
                <div className="header_contact_img">
                    <img src={phone} width="60px" alt="phone"/>
                </div>
                <div className="header_contact_number">
                    <h2>0121 123 1234</h2>
                    <h4>Call our recovery team</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Header
