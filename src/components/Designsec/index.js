import './index.css';
import Card from '../Card'

const imageA = 'https://images.pexels.com/photos/12304077/pexels-photo-12304077.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
const imageL = 'https://images.pexels.com/photos/12217000/pexels-photo-12217000.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
const imageO = 'https://images.pexels.com/photos/5741970/pexels-photo-5741970.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
const imageE = 'https://images.pexels.com/photos/13476143/pexels-photo-13476143.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';

const cards = [
    
    {
        letter: 'DE',
        background: imageA,
    },
    {
        letter: 'S',
        background: imageL,
    },
    {
        letter: 'IG',
        background: imageO,
    },
    {
        letter: 'N',
        background: imageE,
    },
    
    
]




const Designsec = () => {
    
    return (
        
        
        <div className="main-app">
            {cards.map((card, index) => (
                <div key={index}>
                    <Card
                        key={index}
                        text={card.letter}
                        number={index + 1}
                        background={card.background}
                    />
                </div>
            ))}
        </div>
        
        
        
)
    
    
}

export default Designsec