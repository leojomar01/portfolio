import React from 'react';
import './home.scss';
import Nav from '../Nav/Nav';
function Home() {

let list = ['css3','html5','react','laravel','nodejs','sass','github','javascript','python','npm','stackoverflow','chrome','codepen'];
  return (
    <div className='home'>
        <div className="background">
            {
            list.map((e,i)=>(
                <div className={`box box${i}`} key={i}>
                  <ion-icon name={`logo-${e}`}></ion-icon>
                </div>
            ))
            }
            {
              list.slice(7).map((e,i)=>(
                <div className={`box box${i+list.length}`} key={i}>
                </div>
            ))
            }
            
        </div>
      <Nav/>

    </div>
  )
}

export default Home