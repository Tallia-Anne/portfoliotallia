//css
import './index.css';


import SectionPortfolioimage from '../../assets/code.jpg';

const SectionAbout = () => {



    return (

        <div className="SectionAbout" >
            {/*DBT section image */}
            <div className='SectionAbout_image' style={{ backgroundImage: `url(${SectionPortfolioimage})` }}  >
            </div>
            {/* FIN section image */}
            {/* DBT TEXT */}
            <div className='SectionAboutText'>
                <h3>Découvrez mon univers créatif</h3>
                <p>Explorez un éventail de mes créations, chacune racontant une histoire unique et représentant mon savoir-faire artistique.</p>
                <a href='/about'>   <button>Découvrir le Portfolio</button></a>
            </div>
            {/* FIN TEXT */}
           
          
        </div>

    )


}

export default SectionAbout;