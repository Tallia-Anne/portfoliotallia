import './index.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import CountUp from 'react-countup';

const Sectionhomeparallaxe = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="sectionhomeparallaxe" >
            <div className="container-box" data-aos="flip-up" >
                <CountUp className="exp-p" end={2} />
               
                <h4 className='exp' >Année expériences</h4>
            </div>
            
            <div className="container-box" data-aos="flip-up" >
                <CountUp className="exp-p" end={15} duration={1} />
                
                <h4 className='exp' >Nombre de Projet </h4>
            </div>
            
            <div className="container-box" data-aos="flip-up" >
                <CountUp className="exp-p" end={12} duration={1} />
                
                <h4 className='exp' >Nombre de Projet </h4>
            </div>
            
           
            
        </div>
)
    
    
}

export default Sectionhomeparallaxe