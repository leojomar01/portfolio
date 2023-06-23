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
    hideALL()
  }
  const hideALL = ()=>{
    const skills = document.querySelector('.skills');
    skills.classList.remove('active');
  }


  return (
    <div className='nav'>
      <Skills/>
      <div className="nav-button" onClick={navToggle}>
        
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