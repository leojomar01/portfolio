import React from 'react';
import './home.scss';
import Nav from '../Nav/Nav';
import { useEffect, useState } from "react";
import Loader from '../Loader';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import {AnimatePresence, motion} from "framer-motion";
import Projects from '../Projects/Projects';



function Home() {
const list = ['css3','html5','react','laravel','nodejs','sass','github','javascript','python','npm','stackoverflow','chrome','codepen'];
const [isLoading, setIsLoading]= useState(true);
const defaultTimer = 4300;
const [activePage , setActivePage] = useState('about');

const [cName, setCName]= useState("");
const randomNum = Math.floor(Math.random() * 5) * 500 + defaultTimer;

useEffect(() => {
  const delayedFunction = () => {
    setIsLoading(false)
  };
  const delayedFunction2 = () => {
    setCName('active')
  };

  const timer = setTimeout(delayedFunction, defaultTimer);
  const timer2 = setTimeout(delayedFunction2, defaultTimer + 100);

  return () => clearTimeout(timer,timer2);
}, [randomNum]); 

const changePage = (e) =>{
  setActivePage(e);
  console.log(e);
}




return (
    <AnimatePresence>
      {isLoading?
      <motion.div
        initial={{opacity:1}}
        transition={{duration:1}}
        exit={{scale:.1,opacity:0}}
      >
        <Loader/>
      </motion.div>
        :
      <motion.div className={'home '+cName}
        animate={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration:2}}
      >
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
            {
              (activePage==='about')?
              <About/>:


              (activePage==='skills')?<Skills/>:
              (activePage==='projects')?<Projects/>:
              null
            }
        <Contacts/>
        <Nav changePage={changePage}/>
      </motion.div>
      }
        
    
    
    </AnimatePresence>
  )
}

export default Home