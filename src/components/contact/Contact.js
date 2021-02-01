import React from 'react'
import './Contact.css';

function Contact() {
    return (
        <div className="contact_container">
            <div className="contact_title">
                <h1>Contact us</h1>
            </div>
            <div className="contact_body">
                <div className="contact_body_left">
                    <h2>Phone</h2>
                    <h3>0121 123 1234</h3>
                    <h3>Instagram</h3>
                    <h3>Facebook</h3>
                    <h3>Twitter</h3>

                </div>
                <div className="contact_body_right">
                    <h2>Contact Form</h2>
                    <form>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="phone" placeholder="Mobile"/>
                        <textarea placeholder="Message..."></textarea>
                        <button>Send</button>

                    </form>

                </div>
            </div>
            
        </div>
    )
}

export default Contact
