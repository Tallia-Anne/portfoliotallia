import { Link } from "react-router-dom"
const Buttonlink = ({ projets: { id} }) => {
    
    return (
        <>
            <Link to={`/pageblogdetails/${id}`} ><button>En savoir plus</button></Link> 
        </>
)
    
}

export default Buttonlink