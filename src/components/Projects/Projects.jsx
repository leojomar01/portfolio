import React from 'react';
import './projects.scss';
import { motion} from "framer-motion";
import { register } from 'swiper/element/bundle';
import { Link } from 'react-router-dom';
import projects from '../JSON/Projects.json';



function Projects() {
  register();
  const allProjects = projects.projects;

  // double the list to fix visual bug in swiper js
  const doubleProjects = allProjects.concat(allProjects);

  return (
    <motion.div className='projects'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{type:'tween',duration:.5}}
    >
       <swiper-container 
        slides-per-view="4" 
        centered-slides= 'true'
        speed="600" 
        loop="true" 
        navigation
       >
        {
            doubleProjects.map((e,i)=>(
              <swiper-slide key={i}>
                <div className="bgImage"><img src={`./images/${e.image}`} alt="" /></div>
                <div className='card'>
                  <div className="title"><h4>{e.title}</h4></div>
                  <div className="desc"><h6>{e.desc?e.desc:"No Details"}</h6></div>

                  <div className="links">
                    {e.liveLink?
                      (<div className="liveLink link"><Link target='_blank' to={e.liveLink}><ion-icon name="globe-outline"></ion-icon></Link></div>)
                      :
                      null
                    }
                    {e.repoLink?
                      (<div className="repoLink link"><Link target='_blank' to={e.repoLink}><ion-icon name="logo-github"></ion-icon></Link></div>)
                      :
                      null
                    }
                    
                  </div>
                </div>
              </swiper-slide>
            ))
        }
      </swiper-container>
    </motion.div>
  )
}

export default Projects