
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                                        /*Hero-Home*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////



//  CSS
import './index.css';
//

// Les images

import heroimage from '../../assets/aboutimage.jpg';

//
const Hero = () => {
    return (

        <div className='hero'  style={{ backgroundImage: `url(${heroimage})` }} > 
            
            <div className="bg-image"></div>
        </div>

    )


}

export default Hero;