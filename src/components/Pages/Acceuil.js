//css
import './style.css';

// Les sections
import Hero from '../Hero';
import Sectintro from '../SecIntro';
import Sectintrogalerie1 from '../Sectintogalerie1';
import Sectintrogalerie2 from '../Sectintrogalerie2';
import Sectionhomeparallaxe from '../Sectionhomeparallaxe';

// import Filterprojet from '../Filterprojet'
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
            {/* <Filterprojet/>  */}
            <Scrolltotop />
            <Footer />
        </div>

    )


}

export default Home;