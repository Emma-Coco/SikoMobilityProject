import React from 'react';
import logo from '../assets/logo.png';
import arrow from '../assets/arrow.png';
import SwitchButton from './switchButton';

function Header() {
  return (
    <div className='wrapper'>
      <div className="header">
        <div className='logo'>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className='right'>
          <ul>
            <li><SwitchButton/></li>
            <li>Nos services <img src={arrow} alt="Arrow" /></li>
            <li>Qui sommes-nous? <img src={arrow} alt="Arrow" /></li>
            <li><a href="/simulation" className="simulation-link">Faire une simulation</a></li>          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
