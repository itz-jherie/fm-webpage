import React from "react";


import down  from '../assets/images/icon-arrow-down.svg'
import todo from '../assets/images/icon-todo.svg'
import calendar from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'


const NavCont = () => {
   

    return ( 
        <div className="nav-cont2">
        <div className='nav-links'>
             <div className='features'>Features <img src={ down } alt='feature-img'></img>
                 <div className='feature-list'>
                    <ul>
                        <li> <img src={todo} alt='todo-img'/>Todo List</li>
                        <li> <img src={calendar} alt='calendar-img'/>Calendar</li>
                        <li> <img src={reminders} alt='reminder-img'/>Reminders</li>
                        <li> <img src={planning} alt='planning-img'/>Planning</li>
                    </ul>
                 </div>
             </div>
             
             <div className='company'>Company  <img src={ down } alt='company-img'></img>
                 <div className='company-list'>
                     <ul>
                         <li>History</li>
                         <li>Our Team</li>
                         <li>Blog</li>
                     </ul>
                 </div>
             </div>
             <p>Careers</p>
             <p>About</p>
             
             
        </div>

        <div className='login-container'>
            <button className='button1'>Login</button>
            <button className='button2'>Register</button>
        </div>
        
    </div>
     );
}
 
export default NavCont;