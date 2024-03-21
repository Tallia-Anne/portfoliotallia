//css
import './index.css';


import SectionPortfolioimage from '../../assets/portfoliosection.jpg';

const SectionPortfolio = () => {



    return (

        <div className="SectionPortfolio" >
            {/* DBT TEXT */}
            <div className='SectionPortfolioText'>
                <h3>Découvrez mon univers créatif</h3>
                <p>Explorez un éventail de mes créations, chacune racontant une histoire unique et représentant mon savoir-faire artistique.</p>
                <a href='/portfolio'>   <button>Découvrir le Portfolio</button></a>
            </div>
            {/* FIN TEXT */}
            {/*DBT section image */}
            <div className='SectionPortfolio_image' style={{ backgroundImage: `url(${SectionPortfolioimage})` }}  >
            </div>
            {/* FIN section image */}
          
        </div>

    )


}

export default SectionPortfolio;