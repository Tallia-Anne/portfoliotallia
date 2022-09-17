
 
const Galcard = (props) => {
   
   
    return (
        
        <>
            <div className="gallery__item gallery__item--1">
                <h1>{props.article.nom}</h1>
                <p>{props.article.description}</p>  
                {props.article.images.map((image) => (
                    <img src={image.image} alt="" />
                ))}
                
            </div>
        </>
)
    
}

export default Galcard;