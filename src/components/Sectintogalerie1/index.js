import './index.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
const imagegalerie = "https://images.pexels.com/photos/12862112/pexels-photo-12862112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const imagegalerie2 = "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

const Sectintrogalerie1 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="sectiongalerie1">
            
            <div className="galerie1" data-aos="fade"   >
                <img className='galerieimage'  src={imagegalerie} alt="" />
            </div>
            
            <div className="galerie2" data-aos="fade"  >
                <img className='galerieimage'  src={imagegalerie2} alt="" />
            </div>
            
        </div>
)
}

export default Sectintrogalerie1