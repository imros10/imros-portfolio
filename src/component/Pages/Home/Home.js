import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import imros from '../../../image/imros2.png'
import Typewriter from 'typewriter-effect';
import Header from '../../Shared/Header/Header';
import WaterWave from 'react-water-wave';
import imgae from '../../../image/bg.jpg'



const Home = () => {
     
    return (
       <div id='home' className="header-container">
         <Header></Header>
         <div className="container header-main">
           <img src={imros} alt="" />
           <h1>Imros Arefen</h1>
           <div className="header-type">
             <p>I am Passionate </p>
           <Typewriter
            options={{
              strings: ['Web Developer', 'React Developer'],
              autoStart: true,
              loop: true,
              pauseFor: (2000)
            }}
          />
           </div>
           <button className='my-button'><a style={{color: 'white',textDecoration: 'none'}} href="https://drive.google.com/file/d/1WTCnwbN8b8nxDaqXlD6gUIOxHhOkrx17/view">DownLoad Resume</a> <i class="fas fa-download"></i></button>
         </div>
       </div>  
       
    )
}

export default Home;