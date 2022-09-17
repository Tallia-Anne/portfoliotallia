import './portstyle.css'

import Portfolio from '../Portfolio';
import Heroportfolio from '../Heroportfolio';
import Scrolltotop from '../Scrolltotop';
import Footer from "../Footer";


const Galery = () => {
    
    
    return (

        <div className='Contportfolio' >
            <Heroportfolio />
            <Portfolio />
            <Scrolltotop/>
            <Footer/>
        </div>

    )


}

export default Galery;