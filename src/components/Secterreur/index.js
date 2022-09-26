import './index.css'
import { Link } from "react-router-dom";
const image404 = 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600';
const Secterreur = () => {
    return (

        <div className="bg-404" style={{ backgroundImage: `url(${image404})` }} >
            <div>
                <h1>404</h1>


                <div className="btn">
                    <Link to="/" className='buttonerreur'>Acceuil</Link>
                    <div className="fond"></div>
                </div>
            </div>
        </div>

    )
}
export default Secterreur