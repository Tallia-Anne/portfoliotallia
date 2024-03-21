//css
import './style.css';

// Les sections
import Hero from '../Hero';
import Sectintro from '../SecIntro';
import Sectintrogalerie1 from '../Sectintogalerie1';
import Sectintrogalerie2 from '../Sectintrogalerie2';
import Sectionhomeparallaxe from '../Sectionhomeparallaxe';
import SectionPortfolio from '../SectionPortolio';
import SectionAbout from '../SectionAbout';
import Scrolltotop from '../Scrolltotop';
import Footer from '../Footer';
// fin les sections

const Home = () => {



    return (

        <div className="Home" >
            <Hero />
            <Sectintro />
            <Sectintrogalerie1 />
            <Sectintrogalerie2 />
            <Sectionhomeparallaxe />
            <SectionAbout/>
          <SectionPortfolio/>
            <Scrolltotop />
            <Footer />
        </div>

    )


}

export default Home;