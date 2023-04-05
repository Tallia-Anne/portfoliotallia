import Aos from 'aos';
import { useState } from 'react';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Cardperson from '../Cardperson';
import projets from '../../assets/projets';



const allCategories = ['All', ...new Set(projets.map(projet => projet.category))];

console.log(allCategories);

const Portfolio = () => {
    
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);
    
    useEffect(() => {
        setData(projets);
        setCollection([...new Set(projets.map((projet) => projet.category))])
    }, []) 
    
    
    const gallery_filter = (projetData) => {
        const filterData = projets.filter((projet) => projet.category === projetData);
        setData(filterData);
    }
    
   
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    
    
    
    return (

        <div className="containerprojets">
            <ul>
                <li><button onClick={() => setData(projets)}>All</button></li>
                {
                    collection.map((projet) => <li><button onClick={() => { gallery_filter(projet) }}>{projet}</button></li>)
                }
            </ul>
            <div className="projets">
            {
                data.map((projet) =>
                    
                    <Cardperson projet={projet}/>
                
                )
            }
            </div>
        </div>
    )


}

export default Portfolio

