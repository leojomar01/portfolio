import React,{useEffect} from 'react';
import './about.scss';
import './name.scss';

import { motion} from "framer-motion";

function About() {
    const letterL= [];
    const letterE= [];
    const letterO= [];
    const createTriangle = (arr,leng) =>{
        for(let i =0;i<leng;i++){
            arr.push(i);
        }
    }
    createTriangle(letterL,12);
    createTriangle(letterE,11);
    createTriangle(letterO,12);

    useEffect(()=>{
        const name = document.querySelector('.nameAnimation')
        const letter = document.querySelector('.letter-L')
        const removeClose = () =>{
            name.classList.remove('close')
        }

        const addClose = () =>{
            name.classList.add('close')
        }
        letter.addEventListener('mouseenter', removeClose)
        letter.addEventListener('mouseleave', addClose)
        return () => {
            letter.removeEventListener('mouseenter', removeClose)
            letter.removeEventListener('mouseleave', addClose)
          };
    })

  return (
    <motion.div className='about'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{type:'tween',duration:.5}}
    >
        <div className="name">
            <motion.h1
                initial={{opacity:0,x:30}}
                animate={{opacity:1,x:0}}
                transition={{delay:.5,duration:.5}}
            >
                Hello! My Name is
            </motion.h1>
            <motion.span
                initial={{opacity:0,x:30}}
                animate={{opacity:1,x:0}}
                transition={{delay:.75,duration:.5}}
            >
                Leo Jomar Reyes
            </motion.span>
            <motion.h1
                initial={{opacity:0,x:30}}
                animate={{opacity:1,x:0}}
                transition={{delay:1,duration:.5}}
            >
                A passionate Web developer
            </motion.h1>
        </div>


        <motion.div className='nameAnimation close'
            initial={{opacity:0,x:30}}
            animate={{opacity:1,x:0}}
            transition={{duration:.5}}
        >
            <div className='letter-L'>
                {letterL.map((i)=>(
                    <motion.div 
                        className={'triangle'} 
                        key={i}
                        transition={{delay:((i+1)*.05)}} 
                        initial={{opacity:0}}
                        animate={{opacity:1}}   
                    >

                    </motion.div>
                ))}
            </div>

            {/* <div className='letter-E'>
                {letterE.map((i)=>(
                    <div className='triangle' key={i}></div>
                ))}
            </div>

            <div className='letter-O'>
                {letterO.map((i)=>(
                    <div className='triangle' key={i}></div>
                ))}
            </div> */}
        </motion.div>
    </motion.div>
    
    
  )
}

export default About