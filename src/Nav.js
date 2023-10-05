import LI from './LI-In-Bug.png';
import {Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import './styles/nav.css';

export default function Nav(){
    return(
    <div>
    <nav className='topBar'>
        <a href='/'><Link to="/">Home</Link></a>
        <a href='/'><Link to="/about">About</Link></a>
        <a href='/'><Link to="/skills">Skills</Link></a>
        <a href='/'><Link to="/contact">Contact</Link></a>
        <a href="https://www.linkedin.com/in/payton-webb-53938a24a/" target="_blank" rel="noopener noreferrer">
          <button class="linkedin-button">
            <img src= {LI} alt="LinkedIn Logo" ></img>
          </button>
        </a>
    </nav>
    <Outlet />
    </div>
    );
}
