import React, { useEffect,useState } from "react";
import Galcard from '../Galcard'

function Quotes() {
    const [articles, setArticle] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/article/all")
            .then((res) => res.json())
            .then((data) =>
                
                setArticle(data.articles)
            );
       
    }, []);
    console.log(`articles`, articles);
    return (
        <div>
            {
                articles.map((article) =>

                    <Galcard article={article} />

                )
            }
        </div>
    )
}
export default Quotes;