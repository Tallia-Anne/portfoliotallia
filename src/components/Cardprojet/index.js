import './index.css'

import { useState } from "react";
import Modal from '../Modal/modale';

const Cardprojet = (props) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="cardprojet" data-aos="fade" onClick={() => {setShow(true);}} >
                <img className='imageprojet' src={props.image} alt="" />
                <div className="overlay-text">
                    
                </div>
            </div>

            
            
            {show === true ? (
                <Modal projet={props.projet} setShow={setShow} />
            ) : null}

        </>

    )
}

export default Cardprojet