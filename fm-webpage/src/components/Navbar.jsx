import React, {useState} from 'react'
import '../App.css';
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-menu.svg'
import NavCont from './NavCont';
import Hamburger from './Hamburger';


const Navbar = () => {
    const [show, setShow] = useState(false);
    const showMenu = ()=> {
        setShow(true);
    }
    return ( 
        <nav className="navbar-container">
           <div className="logo" ><img src={logo} width='89%' alt='logo'/></div>
           <NavCont/>
           <div className='menu' onClick={showMenu}><img src={menu} alt='menu'/></div>
           <Hamburger onClose={() => setShow(false)} show={show}/>
        </nav>
     );
}
 
export default Navbar;