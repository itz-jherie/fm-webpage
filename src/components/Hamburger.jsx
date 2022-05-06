import React, {useState} from "react";
import './hamburger.css';
import down  from '../assets/images/icon-arrow-down.svg'
import todo from '../assets/images/icon-todo.svg'
import calendar from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'
import close from '../assets/images/icon-close-menu.svg';
import { motion } from 'framer-motion';


const Hamburger = (props) => {
    const [showFeatures, setShowFeatures] = useState(false);
    const [showCompany, setShowCompany] = useState(false);

    if(!props.show){
        return null;
    }
    

    return (  
        <div className="ham-container" onClick={props.onClose}>
            
            <motion.div className="ham-items" onClick={e => e.stopPropagation()}
                initial={{x: 120}}
                animate={{x: 0}}
                transition={{type: "tween"}}
                
            >
                <p className="close" onClick={props.onClose}><img src={close} alt="closebutton"/></p>
                <div onClick={ ()=>setShowFeatures(!showFeatures)} >Features <img src={ down } alt='feature-img'></img>{showFeatures ? 
                    <div >
                    <ul className="listi">
                        <li> <img src={todo} alt='todo-img'/>Todo List</li>
                        <li> <img src={calendar} alt='calendar-img'/>Calendar</li>
                        <li> <img src={reminders} alt='reminder-img'/>Reminders</li>
                        <li> <img src={planning} alt='planning-img'/>Planning</li>
                    </ul>
                </div>: null}
                
                    
                </div>
                
                    <div onClick={ ()=>setShowCompany(!showCompany)}>Company  <img src={ down } alt='company-img'></img> {showCompany ?
                        <div >
                            <ul className="list">
                                <li>History</li>
                                <li>Our Team</li>
                                <li>Blog</li>
                                    </ul>
                        </div>: null}
                    </div>

                <p>Careers</p>
                <p>About</p>
                    <div className="ham-buttons">
                        <button >Login</button>
                        <button className="ham-buttons2">Register</button>
                    </div>
                </motion.div> 
                
        </div>
    );
}
 
export default Hamburger;