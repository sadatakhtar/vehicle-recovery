import React from 'react'
import './Review.css';
import customer3 from '../../assets/cus3.jpeg';
import customer2 from '../../assets/cus2.jpeg';
import customer1 from '../../assets/cus1.jpeg';
import speachmarks from '../../assets/speachmarks.png';

function Review() {
    return (
        <div className="review_container">
            <div className="review_customer1">
                <img id="cus1" src={customer1} width="250px" height="250px" alt="customer"/>
                <img id="speech1" src={speachmarks} width="70px" alt="speech marks"/>
                <p>Thank you so much for coming out so quickly. Brilliant service!</p>
            </div>
            <div className="review_customer2">
                <img id="cus2" src={customer2} width="250px" height="250px" alt="customer"/>
                <img id="speech2" src={speachmarks} width="70px" alt="speech marks"/>
                <p>Can't believe how good the service was. Absolutely amazing!!!</p>
            </div>
            <div className="review_customer3">
                <img id="cus3" src={customer3} width="250px" height="250px" alt="customer"/>
                <img id="speech3" src={speachmarks} width="70px" alt="speech marks"/>
                <p>The only highlight of the day was meeting the recovery man and the treatment we recieved.</p>
            </div>
            
            
        </div>
    )
}

export default Review
