import React from 'react';
import './name.scss';

function Name() {


    const letterL= [];
    const letterE= [];
    const letterO= [];

    const createTriangle = (arr,leng) =>{
        for(let i =0;i<leng;i++){
            arr.push(i);
        }
    }
    createTriangle(letterL,10);
    createTriangle(letterE,11);
    createTriangle(letterO,12);

  return (
    <div className='name active'>

        <div className='letter-L'>
            {letterL.map((i)=>(
                <div className='triangle' key={i}></div>
            ))}
        </div>

        <div className='letter-E'>
            {letterE.map((i)=>(
                <div className='triangle' key={i}></div>
            ))}
        </div>

        <div className='letter-O'>
            {letterO.map((i)=>(
                <div className='triangle' key={i}></div>
            ))}
        </div>

    </div>
  )
}

export default Name