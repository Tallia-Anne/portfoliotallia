import './index.css'
import imageblogdetail from "../../assets/myessentialsbg.JPG";
const blogdetailsheader = () => {
    
    return (
        <section className="post-header">

            <div className="header-content post-container ">
                <a href="blogversion2.html" className="back-home"> <i className="fa-solid fa-arrow-left-long"></i> Back</a>
                <h1 className="header-title">X-Min</h1>
                <img src={imageblogdetail} alt="header-post" className="header-img" />
            </div>


        </section>
)
    
}
export default blogdetailsheader