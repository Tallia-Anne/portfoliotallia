
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
                <p className='textpre' >Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Porro commodi cumque est odit tempora
                    unde aliquam omnis? Enim, officia. Facilis corporis
                    possimus molestias. Reprehenderit ea illo inventore
                    perspiciatis, fugiat in! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Excepturi, accusamus.
                    Consequatur provident sed perferendis. Necessitatibus
                    eius, quam itaque vel molestias quae voluptate est,
                    debitis veritatis veniam sunt? Consequuntur, in corrupti.
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Porro commodi cumque est odit tempora
                    unde aliquam omnis? Enim, officia. Facilis corporis
                    possimus molestias. Reprehenderit ea illo inventore
                    perspiciatis, fugiat in! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Excepturi, accusamus.
                    Consequatur provident sed perferendis. Necessitatibus
                    eius, quam itaque vel molestias quae voluptate est,
                    debitis veritatis veniam sunt? Consequuntur, in corrupti.
                </p>
                <a href={Cv} download='Cv'><button type='submit'>Télécharger le CV</button></a> 
            </div>
            
            
        </div>

        
        
)
    
}



export default Sectaboutpresentation