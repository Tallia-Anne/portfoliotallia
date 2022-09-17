import './index.css';
import Card from '../Card'

import imageA from '../../assets/mockup.jpg';
import imageL from '../../assets/myessentialsbg.JPG';
import imageO from '../../assets/c61e94119064397.6095907157344.jpg';
import imageE from '../../assets/285e0c127604347.Y3JvcCw5MjIsNzIxLDAsMTg.webp';

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