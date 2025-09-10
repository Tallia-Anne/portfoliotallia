
import './index.css'

import imagetallia from '../../assets/Screenshot_20220908-141035_Snapchat.jpg'

import Cv from '../../assets/CVtalliaAnne.pdf'

const Sectaboutpresentation = () => {
    
    return (
        
        <div className="sectaboutpresentation">
            
            <div className="sectaboutimage">
                <div className='img-bg' >
                    <img  className='sectimagetallia' src={imagetallia} alt="tallia" />
                </div> 
            </div>
            <div className="sectabout-person">
                <h3>Bonjour! Je suis Tallia</h3>
                <p className='textpre' >J'ai 25 ans. J'habite à Eragny sur Oise dans le département de val d'oise. J’ai fait l'école de seconde chance qui m'a aidée à trouver une formation développeur web et web mobile à Digital France School. Diplômée du titre professionnel de Développeur web et web mobile du bac +2., j'aime expérimenter, découvrir et apprendre des nouvelles technologies. Dans ce portfolio, je vous présente mes compétences, mon parcours ainsi que mes principales intégrations et créations graphiques. Je vous propose mes services comme des création de sites, adaptés tous support (mobile, tablette, ordinateur) , des maquettes et des logos. Pour toute question, n’hésitez pas à me contacter.

                </p>
                <a href={Cv} download='Cv'><button type='submit'>Télécharger le CV</button></a> 
            </div>
            
            
        </div>

        
        
)
    
}



export default Sectaboutpresentation
