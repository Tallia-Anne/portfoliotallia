
import './index.css'

import imagetimeline from '../../assets/close-up-image-of-programer-working-at-his-desk-in-office.jpg'

const Parcours = () => {
    
    return (
        
        <div className="containertimeline" style={{ backgroundImage: `url(${imagetimeline})` }}>
            <h1>Mon parcours </h1>
                
            <div class="timeline"  >
                <ul>
                    <li>
                        <span>Mai 2022</span>
                        <div class="content">
                            <h3>Concepteur développeur front-end</h3>
                            <p>
                               Projet fin d'etude sur React.js
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>2021 </span>
                        <div class="content">
                            <h3>Certificat de développeur web et web mobile à Digical school France</h3>
                            <p>
                              Etude final : 2 projets 
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>2019/2020</span>
                        <div class="content">
                            <h3>Ecole de la deuxième chance (E2C95)</h3>
                            <p>
                                Elaboration de projet professionnel
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>2015/2018</span>
                        <div class="content">
                            <h3>Lycée Afred Kastler</h3>
                            <p>
                              Niveau Baccalauréat Terminal S
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>2011/2014</span>
                        <div class="content">
                            <h3>Collége de la justice</h3>
                            <p>
                               Diplôme: Brevet Mention Bien
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        
)
    
}

export default Parcours