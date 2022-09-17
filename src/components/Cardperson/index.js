import './index.css'

import { useState } from "react";
import Modal from '../Modal/modale';

const Cardperson = (props) => {
    
    const [show, setShow] = useState(false);
    
    return (
        <>
        <div className="card-projet"
            

        >
                <div className="cardprojet" data-aos="fade" onClick={() => { setShow(true); }} >
                    <img className='imageprojet' src={props.projet.image} alt="" />
                    
                </div>
                {/* <div className="activemodale">
                    <p onClick={() => {
                        setShow(true);
                    }} >+</p>
                </div> */}
            
        
            {/* modale.ici */}
            
            
            
            
            
            
        </div>
        
            {show === true ? (
                <Modal projet={props.projet} setShow={setShow} />
            ) : null}
    
   </>
        
)
} 

export default Cardperson