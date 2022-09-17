
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                                        /*Hero-Home*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////



//  CSS
import './index.css';
//

// Les images

import heroimage from '../../assets/[Downloader.la]-631a63fee9cde.jpg';

//
const Hero = () => {
    return (

        <div className='heroportfolio'  style={{ backgroundImage: `url(${heroimage})` }} > 
            
            <div className="bg-image">
            <h1 className='heroportfoliotext' >Portfolio Gallerie</h1>
                
            </div>
        </div>

    )


}

export default Hero;