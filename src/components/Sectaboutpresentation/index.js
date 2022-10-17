
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
                <p className='textpre' >J'ai 22 ans.
                    J'habite à Eragny sur Oise dans le département de val d'oise.
                    Je suis allée dans une école qui s'appelle l'école de seconde chance qui m'aidait à trouver cette formation développeur web et web mobile à Digital France School.
                    Diplômé du titre professionnel de Développeur web et web mobile du bac +2.
                    J'aime expérimenter, découvrir et apprendre des nouvelles technologies.
                    Dans ce portfolio que j'ai réalisé, je vais vous présenter mes compétences.
                    Mon parcours ainsi que mes principales intégrations et créations graphiques.
                    Deplus, je vous propose mes services comme des création de sites, adaptés tous support (mobile, tablette, ordinateur) , des maquettes et des logos.
                    Pour toute question, n’hésitez pas à me contacter. 

                </p>
                <a href={Cv} download='Cv'><button type='submit'>Télécharger le CV</button></a> 
            </div>
            
            
        </div>

        
        
)
    
}



export default Sectaboutpresentation