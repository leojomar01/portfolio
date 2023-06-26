import React, { useEffect, useRef, useState } from 'react';
import './nav.scss';
import Skills from '../Skills/Skills';



function Nav() {

  const navLinkref = useRef(null);
  const [left,setLeft] = useState(0);
  const [width,setWidth] = useState(0);
  const [isNavActive,setIsNavActive] = useState(true);

  const style = {
    left: left,
    width:width
  };

  const classNav = isNavActive? 'active' :'notactive'; 

  const navToggle = () =>{
    setIsNavActive(!isNavActive)
  }

  useEffect(()=>{
    const navLinkList = navLinkref.current.querySelectorAll('.navLink');

    const indicator = (e)=>{
      setLeft(e.offsetLeft + 'px')
      setWidth(e.offsetWidth + 'px')
    }

    const backToActive = ()=>{
      const navLinkActive = navLinkref.current.querySelector('.navLink.active');
      setWidth(navLinkActive.offsetWidth + 'px')
      setLeft(navLinkActive.offsetLeft + 'px')
    }
    backToActive()

    const makeActive =(e)=>{
      navLinkList.forEach(navLink => {
       navLink.classList.remove('active');
       e.classList.add('active')
      });
    }
    navLinkList.forEach(navLink => {
      navLink.addEventListener('click',(e)=>makeActive(e.target))
      navLink.addEventListener('mouseenter',(e)=>indicator(e.target))
      navLink.addEventListener('mouseleave',backToActive)
    });

  },[navLinkref])




  const showSkills = () => {
    const skills = document.querySelector('.skills');
    hideALL()
    skills.classList.add('active');
  }
  const showProjects = () =>{
    hideALL()
  }
  const showAbout = () =>{
    const about = document.querySelector('.name')
    hideALL()
    about.classList.add('active')
  }
  const hideALL = ()=>{
    const skills = document.querySelector('.skills');
    const about = document.querySelector('.name');

    about.classList.remove('active');
    skills.classList.remove('active');
  }

  const hexagon = (
      <g>
        <path className="line" d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"></path>
        <path className="progress" d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"></path>
      </g>
  );

  return (
    <div className='nav'>
      <div className="nav-button" onClick={navToggle}>
      <svg className='hex1' viewBox="-5 -9 200 200" transform="rotate(90)">
        {hexagon}
      </svg>
      <svg className='hex2' viewBox="-5 -9 200 200" transform="rotate(90)">
        {hexagon}
      </svg>
      <svg className='hex3' viewBox="-5 -9 200 200" transform="rotate(90)">
        {hexagon}
      </svg>
      <svg className='hex4' viewBox="-5 -9 200 200" transform="rotate(90)">
        {hexagon}
      </svg>

        
      </div>
      <ul className={"menu " + classNav} ref={navLinkref}>
        <div id='marker' style={style}></div>
        <li className='navLink active' onClick={showAbout}>About</li>
        <li className='navLink' onClick={showProjects}>Projects</li>
        <li className='navLink' onClick={showSkills}>Skills</li>
      </ul>
    </div>
  )
}

export default Nav