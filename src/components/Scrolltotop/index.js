import './index.css';
import React, { useEffect, useState } from "react"
import arrow from '../../assets/down-arrow (1).png'

const Scrolltotop = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    
    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop}>
                    <img src={arrow} alt="" className='arrow' />
                </div>
            )}
        </div>
        
        
)
    
    
}


export default Scrolltotop