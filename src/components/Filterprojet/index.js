import './index.css'


import { useState } from 'react';
import items from '../../assets/allData';
import Menu from '../Menu';
import Button from '../Buttons/button'

const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories);



const Filterprojet = () => {

    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);
    
    //la fiction filtre
    const filter = (button) => {
        
        if (button === 'All') {
            setMenuItem(items);
            return
        }
        const filteredData = items.filter(item => item.category === button);
        setMenuItem(filteredData)
        
    }
    
    
    return (
        <div className="container">
            <div className="title">
                <h1>
                    Portfolio
                    <span> Filter</span>
                </h1>
            </div>
            <Button button={buttons} filter={filter} />
            <Menu menuItem={menuItem} />
        </div>
)
    
    
}

export default Filterprojet;