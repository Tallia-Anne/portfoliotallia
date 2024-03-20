
//CSS-about
import './styleabout.css'

// dbt les sections 
import Heroabout from '../Heroabout';
import Sectintroabout from '../Sectintroabout';
import Sectaboutpresentation from '../Sectaboutpresentation';
import Skill from '../Skill'
import Parcours from '../Parcours';
import Scrolltotop from '../Scrolltotop';
import Footer from '../Footer';

// fin les sections

const About = () => {
    return (

        <div className='About'>
            <Heroabout />
            <Sectintroabout />
            <Sectaboutpresentation />
            <Skill />
            <Parcours />
            <Scrolltotop />
            <Footer />
        </div>

    )


}

export default About;