//Css
import './portstyle.css'

// dbt_les sections

import Portfolio from '../Portfolio';
import Heroportfolio from '../Heroportfolio';
import Scrolltotop from '../Scrolltotop';
import Footer from "../Footer";

//fin_les sections

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