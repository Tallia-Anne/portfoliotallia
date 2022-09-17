
import './index.css'


import imageliberté from '../../assets/beautiful-purple-flowers-in-vase.jpg' 
const image1 = "https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const image2 = "https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const image3 = "https://images.pexels.com/photos/8251157/pexels-photo-8251157.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
const SectQualite = () => {
    
    return (
        
        <div className="sectQualite">
            <div className="sectimagequalite">
              
                    <img  src={imageliberté} alt="" />
                
                <p className='titlequalite' >Qualités</p>
            </div>
            
            <div className="sectQualiteune">
                
                <div className="list-qualite">
                    <ul>
                        <li> <i class="fa-thin fa-circle-check"></i>Je suis une personne qui est déterminer
                            qui ne lache pas l'affaire</li>
                        <li>Ambisieuse, </li>
                        <li>Creative, je suis une personne qui remplie de couleur et d'imagination.
                            j'aime beaucoup réver pour le but de réaliser mes rêves et mes objectives</li>
                        <li>Timide en raison de mon handicap mais
                            je suis pris de la confiance en moi.
                            J'aime d'abord observer les personnes pour me rassurer  </li>
                        <li>lorem</li>
                        
                    </ul>
                </div>

                
            </div>
            
            
            <div className="sectQualiteimage">
                <div className='sectQualiteimg-bg' >
                    <img className='ladanseuse' src={image2} alt="" />
                </div>
                <div className='sectQualiteimg-bg' >
                    <img className='ladanseuse' src={image1} alt="" />
                </div>
                <div className='sectQualiteimg-bg' >
                    <img className='ladanseuse' src={image3} alt="" />
                </div>
            </div>
            
        </div>

        
        
)
    
}

export default SectQualite