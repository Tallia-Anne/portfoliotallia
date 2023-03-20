
import './index.css'
// import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons'



const Modal = (props) => {
    
    return (
        <div
            onClick={() => {
                props.setShow(false);
            }}
            className="myModal"
            
        >
            <div className="conmodal">

                
                <div className='modal-text'>
                    <div className="modaltitle">
                        <h1>{props.projet.title}</h1>
                       
                    </div>
                    <div className="descr">
                        <p className="categorie">Categorie: {props.projet.category}</p>
                        <p>{props.projet.description}</p>
                    </div>
                    <div className="liens">
                        <a href={props.projet.lien1} className="bg-icone" ><FontAwesomeIcon icon={faGithub} /></a>
                        <a href={props.projet.lien2} className="bg-icone" ><i class="gg-website"></i></a>
                       
                    </div>
                    
                  
                    
                </div>
                <div className='modal-img'>
                    <img src={props.projet.image} alt="" />
                </div>
            </div>


        </div>
)
    
} 

export default Modal