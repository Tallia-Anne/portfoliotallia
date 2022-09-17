
import './styleabout.css'
import Heroabout from '../Heroabout';
import Sectintroabout from '../Sectintroabout';
import Sectaboutpresentation from '../Sectaboutpresentation';
import Skill from '../Skill'
import Parcours from '../Parcours';
import SectQualite from '../SectQualite';
import Footer from '../Footer';
const About = () => {
    return (

        <div className='About'> 
            <Heroabout />
            <Sectintroabout />
            <Sectaboutpresentation />
            <Skill/>
            <Parcours/>
            <SectQualite/>
            <Footer/>
        </div>

    )


}

export default About;