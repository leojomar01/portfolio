import './nav.scss';




import React from 'react'

function Nav() {
  return (
    <div className='nav'>
        <div className="svg-container">
            <svg
                viewBox="0 0 520 70"
                className="svg-content"
            >
            <path d="M 40 10 230 10 255 20 280 10 480 10 510 35 480 60 40 60 10 35 z40 10 "/>
            </svg>
            
            <ul className='menu'>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
            </ul>
        </div>
    </div>

  )
}
export default Nav