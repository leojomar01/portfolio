import React, { useEffect, useRef, useState } from 'react';
import './nav.scss';
import { Link } from 'react-router-dom';



function Nav(props) {

  const {location} = props;
  const navLinkref = useRef(null);
  const [left,setLeft] = useState(0);
  const [width,setWidth] = useState(0);
  const [isNavActive,setIsNavActive] = useState(false);
  const wWidth = window.innerWidth;

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
    const makeActive =(e)=>{
      const activeID =(e==='/')?document.querySelector('#about'): document.querySelector('#'+e.slice(1))
      navLinkList.forEach(navLink => {
        navLink.classList.remove('active');
        activeID.classList.add('active')
        
      });
    }
    makeActive(location)
  },[location])


  useEffect(()=>{
    const navLinkList = navLinkref.current.querySelectorAll('.navLink');
    if(wWidth>450){
      navToggle()
    }
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
        if(wWidth<450){
          setIsNavActive(false)
        }
      });
    }
    navLinkList.forEach(navLink => {
      navLink.addEventListener('click',(e)=>makeActive(e.target))
      navLink.addEventListener('mouseenter',(e)=>indicator(e.target))
      navLink.addEventListener('mouseleave',backToActive)
    });
  },[navLinkref])


  
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
        <Link to='/' id='about' className='navLink active'>About</Link>
        <Link to='/projects' id='projects' className='navLink'>Projects</Link>
        <Link to='/skills' id='skills' className='navLink'>Skills</Link>
      </ul>
    </div>
  )
}

export default Nav