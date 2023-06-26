import React, { useState,useEffect } from 'react';
import './mouse.scss';


function Mouse() {
    const [left,setLeft] = useState(0);
    const [top,setTop] = useState(0);

    const mouseStyle = {
        left:left,
        top:top
    };
        
    useEffect(() => {
        const editCursor = (e) => {
          setLeft(e.clientX);
          setTop(e.clientY);
        };
    
        window.addEventListener('mousemove', editCursor);
      });

  return (
    <div id='mouse'>
        <div>
            <svg viewBox='0 0 51 51'className='s1' transform="translate(25)">   
                <g> 
                    <path  d="M20 20, 23 18 6 1, 40 20, 20 20,18 23 1 5 20 40 20 20 30 30, 20 26, 20 20, 30 30, 26 20, 20 20 z1 1"/>
                </g>
            </svg>
        <div>
        </div>
        <svg viewBox='0 0 51 51' width={50} height={50} className='s2'>   
            <g> 
        <path  d="M1 1, 20 20, 15 35, 1 1, 35 15, 20 20, 30 30, 20 26, 20 20, 30 30, 26 20, 20 20 z1 1"/>
                
            </g>
        </svg>
        </div>
        <div>
        <svg 
        viewBox='-14 0 51 51' width={50} height={50} className='s3'preserveAspectRatio="xMidYMin slice"
        
        
        transform="translate(-15,0)">   
            <g> 
        <path  d="M3 1, 3 25, 0 23, -3 25, -3 1 -13 35, 0 23,-5 27, 0 35, 0 23, 5 27,0 35 0 23 13 35 z"/>
                
            </g>
        </svg>
        </div>
        

    </div>
  )
}

export default Mouse