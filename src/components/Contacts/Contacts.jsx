import React from 'react'
import './contacts.scss'
import { NavLink } from 'react-router-dom';



function Contacts() {
  return (
    <div className='contacts'>

        <ul className='contact-list'>
            <li><NavLink><ion-icon name="logo-codepen"></ion-icon></NavLink></li>
            <li><NavLink><ion-icon name="mail-outline"></ion-icon></NavLink></li>
            <li><NavLink><ion-icon name="logo-github"></ion-icon></NavLink></li>
            <li><NavLink><ion-icon name="document-text-outline"></ion-icon></NavLink></li>
        </ul>
        
    </div>
  )
}

export default Contacts