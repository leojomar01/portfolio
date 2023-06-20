import React from 'react';
import './home.scss';
import Nav from '../Nav/Nav';
import { useEffect, useState } from "react";
import Test from '../Test';


function Home() {
const list = ['css3','html5','react','laravel','nodejs','sass','github','javascript','python','npm','stackoverflow','chrome','codepen'];
const [isLoading, setIsLoading]= useState(true);
const defaultTimer = 2500;

const [cName, setCName]= useState("");
const randomNum = Math.floor(Math.random() * 5) * 500 + defaultTimer;

useEffect(() => {
  const delayedFunction = () => {
    setIsLoading(false)
  };

  const timer = setTimeout(delayedFunction, randomNum);
  console.log(randomNum)

  return () => clearTimeout(timer);
}, [randomNum]); 

useEffect(() => {
  const delayedFunction = () => {
    setCName('active')
  };
  
  const timer = setTimeout(delayedFunction, randomNum + 100);
  return () => clearTimeout(timer);
}, []); 

return (
    <>
      {!isLoading?
      <div className={'home '+cName}>
        <div className="background">
          {list.map((e,i)=>(
              <div className={`box box${i}`} key={i}>
                <ion-icon name={`logo-${e}`}></ion-icon>
              </div>
          ))}

          {list.slice(7).map((e,i)=>(
              <div className={`box box${i+list.length}`} key={i}>
              </div>
          ))}
        </div>

        <Nav/>
      </div>
    :
      <Test/>  
    }
    
    </>
  )
}

export default Home