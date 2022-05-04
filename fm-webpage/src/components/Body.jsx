import React from "react";
import './body.css';
import databiz from '../assets/images/client-databiz.svg'
import audiophile from '../assets/images/client-audiophile.svg'
import meet from '../assets/images/client-meet.svg'
import maker from '../assets/images/client-maker.svg'

const Body = () => {
    return (
        <div className="main-container">
            <div className="hero">
                <p className="large-txt">Make <br/>
                    remote work
                </p>
                <p className="hero-text"> 
                    Get your team in sync, no matter your location. <br/>
                    Streamline processes, create team rituals, and<br/>
                    watch productivity soar.
                </p>
                <button>Learn More</button>
                <div className="client-img">
                    <img src={databiz} alt='databiz'/>
                    <img src={audiophile} alt='audiophile'/>
                    <img src={meet} alt='meet'/>
                    <img src={maker} alt='maker'/>
                </div>
            </div>
            <div className="image" >
                <div className="image-container">
                </div>
            </div>
        </div>
      );
}
 
export default Body;