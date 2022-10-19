import './index.css'
import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
   
    
    return (
        <>
            
            <header className='navigation'>
                <Link to="/" > <h1 class="logo">Tallia<span>-Anne</span></h1></Link> 

                <input type="checkbox" class="navigation__checkbox" id="toggle"/>
                    <label for="toggle" class="navigation__button">
                        <span class="navigation__icon">&nbsp;</span>
                    </label>

                    <div class="navigation__background">&nbsp;</div>
                <nav class="navigation__nav" >
                    
                    <ul className="navigation__list" >
                        <li><Link to="/" className='navigation__link' >  Acceuil </Link>  </li>
                        <li><Link to="/about" className='navigation__link' >  A propos </Link>  </li>
                        <li> <Link to="/portfolio" className='navigation__link' > Portfolio</Link></li>
                        {/* <li> <Link to="/test" className='navigation__link'  > Blog</Link></li> */}
                        
                    </ul>
        
                    
                    
                </nav>

                
            </header>      
            
        </>
)
}

export default Header