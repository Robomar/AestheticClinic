import React from 'react';
import './Header.css';
import Main from '../pics/jpg.jpg'
import SereneAcademy from '../Pages/SereneAcademy'
import { Link } from 'react-router-dom';


const Header = () => {
  return (

    <header className="header">
      <div className="logo">
        <img src={Main} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/book">Book An Appointment</a></li>
          <li><a href="/careers">Careers</a></li>
          <li>
            <a href="/services">Services</a>
            <ul className="dropdown">
              <li><a href="/service1">Service 1</a></li>
              <li><a href="/service2">Service 2</a></li>
            </ul>
          </li>
          <li><Link exact to="/Academy">Serene Academy</Link></li>
        </ul>
      </nav>
    </header>
    
  
    
  );
}

export default Header;
