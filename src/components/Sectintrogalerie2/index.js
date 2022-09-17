import './index.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect } from 'react';
const imagegalerie4 ="https://images.pexels.com/photos/5417622/pexels-photo-5417622.jpeg?auto=compress&cs=tinysrgb&w=600"
const imagegalerie3 ="https://media.istockphoto.com/vectors/web-development-coding-and-programming-futuristic-banner-computer-on-vector-id1341873795?k=20&m=1341873795&s=612x612&w=0&h=sbPuSoMi3XR4AIsJKOoOGq4C0uARSSLA2nZRSRDyRN0="

const Sectintrogalerie2 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className="sectiongalerie2">

            <div className="galerie3" data-aos="fade" >
                <img className='galerieimage'  src={imagegalerie3} alt="" />
            </div>

            <div className="galerie4" data-aos="fade"  >
                <img className='galerieimage' src={imagegalerie4} alt="" />
            </div>

        </div>
    )
}

export default Sectintrogalerie2