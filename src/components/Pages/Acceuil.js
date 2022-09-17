import './style.css';
import Hero from '../Hero';
import Sectintro from '../SecIntro';
import Sectintrogalerie1 from '../Sectintogalerie1';
import Sectintrogalerie2 from '../Sectintrogalerie2';
import Sectionhomeparallaxe from '../Sectionhomeparallaxe';
import Designsec from '../Designsec';
// import Filterprojet from '../Filterprojet'
import Contact from '../Contact';
import Scrolltotop from '../Scrolltotop';
import Footer from '../Footer';


const Home = () => {


    
    return (
        
        <div className="Home" >
            <Hero />
         
            <Sectintro />
            <Sectintrogalerie1/>
            <Sectintrogalerie2 />
            <Sectionhomeparallaxe />
            <Designsec />
            {/* <Filterprojet/>  */}
            <Contact />
            <Scrolltotop/>
            <Footer/>
        </div>
        
)


}

export default Home;