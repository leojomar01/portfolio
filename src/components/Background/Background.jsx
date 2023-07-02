import React from 'react'
import './background.scss';
import { motion} from "framer-motion";

function Background() {


const list = ['css3','html5','react','laravel','nodejs','sass','github','javascript','python','npm','stackoverflow','chrome','codepen'];

  return (
         <motion.div className="background"
          // animate={{filter:'blur(5px)'}}
          transition={{delay:2.5,duration:2.5}}
         >
          {list.map((e,i)=>(
              <div className={`box box${i}`} key={i}>
                <ion-icon name={`logo-${e}`}></ion-icon>
              </div>
          ))}

          {list.slice(7).map((e,i)=>(
              <div className={`box box${i+list.length}`} key={i}>
              </div>
          ))}
        </motion.div>
  )
}

export default Background