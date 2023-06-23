import React from 'react';
import './nav.scss';
import { NavLink } from 'react-router-dom';
import Skills from '../Skills/Skills';

function Nav() {
  return (
    <div className='nav'>
      <Skills/>
      <div className="nav-button">
        
      </div>
      <ul className="menu">
        <li><NavLink to={'../'}>About</NavLink></li>
        <li><NavLink to={'../projects'}>Projects</NavLink></li>
        <li><NavLink to={'../skills'}>Skills</NavLink> </li>
      </ul>
    </div>
  )
}

export default Nav