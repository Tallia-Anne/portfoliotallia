
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                                        /*Hero-Home*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////



//  CSS
import './index.css';
//

// Les images

import heroimage from '../../assets/heroimage.jpg';

//
const Hero = () => {
    return (

        <div className='hero'  style={{ backgroundImage: `url(${heroimage})` }} > 
            
            <div className="bg-image">
            <h1 className='herotext' >Hey, je m’appelle Tallia-Anne Wambiekele Kiyeko</h1>
                <h2 className='herotext' >Développeuse web </h2>
            </div>
        </div>

    )


}

export default Hero;