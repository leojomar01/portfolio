import './nav.scss';




import React from 'react'

function Nav() {
  return (
    <div className='nav'>
        <div className="svg-container">
            <svg
                viewBox="0 0 520 60"
                className="svg-content"
            >
            <path d="M 260 15 290 5 485 5 515 30 485 55 35 55 5 30 35 5 230 5 z550 20"/>
            </svg>

            <ul className='menu'>
                <li className=''>About</li>
                <li>Projects</li>
                <li>Skills</li>
            </ul>
        </div>
        
    </div>

  )
}
export default Nav