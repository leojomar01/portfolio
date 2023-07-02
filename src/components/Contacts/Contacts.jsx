import React from 'react'
import './contacts.scss'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"



function Contacts() {
  return (
    <motion.div className='contacts' 
      animate={{ opacity: 1, x:0}} 
      transition={{duration: 1}} 
      initial={{opacity:.5,x:-50}}
    >
        <ul className='contact-list'>
            <li><NavLink onClick={() => window.location = 'mailto:leojomar01@gmail.com'}><ion-icon name="mail-outline"></ion-icon></NavLink></li>
            <li><NavLink to={'https://codepen.io/leojomar01'} target="_blank"><ion-icon name="logo-codepen"></ion-icon></NavLink></li>
            <li><NavLink to={'https://github.com/leojomar01'} target="_blank"><ion-icon name="logo-github"></ion-icon></NavLink></li>
            <li><NavLink to={'./files/Leo Jomar Reyes Resume.pdf' } target="_blank" download ><ion-icon name="document-text-outline"></ion-icon></NavLink></li>
        </ul>
        
    </motion.div >
  )
}

export default Contacts