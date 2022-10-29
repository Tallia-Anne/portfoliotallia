import './index.css'
import React from 'react';
import { Link } from "react-router-dom";

import logotallia from "../../assets/Logotype_Boutique_Fashion_Neon_Logomark_logo__2_-removebg-preview.png";

const Header = () => {
   
    
    return (
        <>
            
            <header className='navigation'>
                {/* dbt_logo */}
                <Link to="/" > <div className="bglogo">
                    <div className="logotallia" style={{ backgroundImage: `url(${logotallia})` }}  ></div>
                </div>
                </Link> 
                {/* fin_logo */}
                
                {/* dbt_checkboc */}
                <input type="checkbox" className="navigation__checkbox" id="toggle"/>
                    <label for="toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>
                {/* fin_checkboc */}
                    <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav" >
                    {/* dbt_créaction de la liste */}
                    <ul className="navigation__list" >
                        {/* dbt_les liens */}
                        <li>  <Link to="/" className='navigation__link' > <div className="bglogo">
                            <div className="logotallia" style={{ backgroundImage: `url(${logotallia})` }}  ></div>
                        </div>  </Link>   </li>
                        <li><Link to="/" className='navigation__link' >  Acceuil </Link>  </li>
                        <li><Link to="/about" className='navigation__link' >  A propos </Link>  </li>
                        <li> <Link to="/portfolio" className='navigation__link' > Portfolio</Link></li>
                        {/* <li> <Link to="/test" className='navigation__link'  > Blog</Link></li> */}
                        {/* fin_les liens */}
                    </ul>
                    {/* fin_créaction de la liste */}
                    
                    
                </nav>

                
            </header>      
            
        </>
)
}

export default Header