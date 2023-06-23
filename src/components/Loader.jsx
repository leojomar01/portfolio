import React from 'react'
import './loader.scss'
function Loader() {

    const triangles=[];
    for(let i = 0; i<6;i++){
        triangles.push(
            <g key={i}>
                <g>
                <path d="M51 58 V0 l50 28z"/>
                </g>
            </g>
        )
    }
  return (
    <div>
  <div className="loader">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="hexagon"
    viewBox="-5 0 110 130">
    {triangles}
  </svg>
</div>

    </div>
  )
}

export default Loader