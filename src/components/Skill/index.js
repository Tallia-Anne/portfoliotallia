import './index.css'
// dbt les compétences
const HTML = "https://cdn-icons-png.flaticon.com/128/2085/2085206.png";
const Javascript = "https://cdn-icons-png.flaticon.com/512/5968/5968292.png";
const Bootstrap = "https://cdn-icons-png.flaticon.com/512/5968/5968672.png";
const Wordpress = "https://cdn-icons-png.flaticon.com/128/174/174881.png";
const Node = "https://cdn-icons-png.flaticon.com/512/919/919825.png";
const Vue = 'https://cdn-icons-png.flaticon.com/128/1183/1183673.png';
const React = 'https://cdn-icons-png.flaticon.com/128/919/919851.png';
const Figma = 'https://cdn-icons-png.flaticon.com/128/5968/5968705.png';
const Photo = 'https://cdn-icons-png.flaticon.com/512/5210/5210800.png';
const Mysql = 'https://cdn-icons-png.flaticon.com/128/274/274439.png';
const Git = 'https://cdn-icons-png.flaticon.com/128/4926/4926624.png';
const SQL = 'https://cdn-icons-png.flaticon.com/128/5815/5815809.png';
const PHP = 'https://cdn-icons-png.flaticon.com/512/919/919830.png';

//fin des compétences




const Skill = () => {
    
    return (
        
        <div class="container">
            <h2 className='skillh2' >Mes compétences</h2>
            <div className="sectcardskill">
                
            <div className="cardskill">
                <div class="box">
                        <img src={HTML} alt="icon" />
                        <h2 className="text">HTML/CSS</h2>
                </div>
            </div>
            <div className="cardskill">
                <div className="box">
                        <img src={Javascript} alt="icon" />
                    <h2 className="text">Javascript</h2>
                </div>
            </div>
            <div className="cardskill">
                    <div className="box">
                        <img src={Bootstrap} alt="icon" />
                        <h2 className="text">Bootstrap</h2>
                    </div>
            </div>
            <div className="cardskill">
                <div class="box">
                        <img src={Wordpress} alt="icon" />
                        <h2 className="text">Wordpress</h2>
                </div>
            </div>
            <div className="cardskill">
                <div class="box">
                        <img src={Node} alt="icon" />
                        <h2 className="text">Node.js</h2>
                </div>
            </div>
            <div className="cardskill">
                <div class="box">
                        <img src={Vue} alt="icon" />
                        <h2 className="text">Vue.js</h2>
                </div>
            </div>
            <div className="cardskill">
                <div class="box">
                        <img src={React} alt="icon" />
                        <h2 className="text">React.js</h2>
                </div>
            </div>
            <div className="cardskill">
                <div class="box">
                        <img src={Figma} alt="icon" />
                        <h2 className="text">Figma</h2>
                </div>
            </div>
            <div className="cardskill">
                <div class="box">
                        <img src={Photo} alt="icon" />
                        <h2 className="text">Photoshop</h2>
                </div>
            </div>
            <div className="cardskill">
                <div class="box">
                        <img src={Mysql} alt="icon" />
                        <h2 className="text">Mysql</h2>
                </div>
            </div>
            <div className="cardskill">
                <div class="box">
                        <img src={Git} alt="icon" />
                        <h2 className="text">Git</h2>
                </div>
            </div>
            <div className="cardskill">
                <div class="box">
                        <img src={SQL} alt="icon" />
                        <h2 className="text">SQL</h2>
                </div>
                </div>
                <div className="cardskill">
                    <div class="box">
                        <img src={PHP} alt="icon" />
                        <h2 className="text">PHP</h2>
                    </div>
                </div>
                
            </div>
        </div>
        
)
    
    
}

export default Skill