import React from "react";
import './body.css';
import databiz from '../assets/images/client-databiz.svg'
import audiophile from '../assets/images/client-audiophile.svg'
import meet from '../assets/images/client-meet.svg'
import maker from '../assets/images/client-maker.svg'
import { motion } from 'framer-motion';

const Body = () => {
    return (
        <div className="main-container">
            <motion.div className="hero"
                initial={{x: -90}}
                animate={{x: 0}}
                transition={{ duration:0.5}}
            >
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
            </motion.div>
            <motion.div className="image" 
                animate={{scale: [0.7, 1.2, 1]}}
                transition={{ duration: 1.5}}
            >
                <div className="image-container">
                </div>
            </motion.div>
        </div>
      );
}
 
export default Body;