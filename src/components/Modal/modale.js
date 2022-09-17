
import './index.css'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
const icone2 = "https://img.icons8.com/pastel-glyph/64/000000/browser-windows--v1.png";


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
                        <a href={props.projet.lien1}><FontAwesomeIcon icon={faGithub} /></a>
                        <img src={icone2}  alt=""/>
                        <a href={props.projet.lien2}>internet</a> 
                    </div>
                    
                    <Link to={`/pageblogdetails/${props.projet.id}`} ><button>En savoir plus</button></Link> 
                    
                </div>
                <div className='modal-img'>
                    <img src={props.projet.image} alt="" />
                </div>
            </div>


        </div>
)
    
} 

export default Modal