
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projetdata from '../../assets/projets';
import Scrolltotop from "../Scrolltotop";
import './blogdetail.css'
// import Commentaire from '../Commentaire';

const Blogdetails = () => {
    const { id } = useParams()
    const [projet, setProjet] = useState(null);
    useEffect(() => {
        let projet = projetdata.find((projet) => projet.id === parseInt(id))
        if (projet) {
            setProjet(projet)
        }
    }, [id])
    return (
        <>
            {projet ? (
                <>
                    <section className="post-header">

                        <div className="header-content post-container ">
                            <a href="/portfolio" className="back-home"> <i className="fa-solid fa-arrow-left-long"></i> Back</a>
                            <h1 className="header-title">{projet.title}</h1>
                            <img src={projet.image} alt="header-post" className="header-img" />
                        </div>


                    </section>
                    <section className="post-content post-container">
                       
                        <div className="parti-texte">
                            <div className="text-pun">
                                <h2 className="sub-heading">Create Best UX Design</h2>
                                <p className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod dolore facilis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam harum dignissimos excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa beatae cupiditate reiciendis soluta provident quaerat, exercitationem totam sunt magnam? </p>
                                <p className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod dolore facilis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam harum dignissimos excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa beatae cupiditate reiciendis soluta provident quaerat, exercitationem totam sunt magnam? </p>
                            </div>
                          
                            <div className="text-pdeux">
                                <h2 className="sub-heading">Create Best UX Design</h2>
                                <p className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod dolore facilis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam harum dignissimos excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa beatae cupiditate reiciendis soluta provident quaerat, exercitationem totam sunt magnam? </p>
                                <p className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod dolore facilis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam harum dignissimos excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa beatae cupiditate reiciendis soluta provident quaerat, exercitationem totam sunt magnam? </p>
                                <p className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod dolore facilis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam harum dignissimos excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa beatae cupiditate reiciendis soluta provident quaerat, exercitationem totam sunt magnam? </p>
                            </div>
                        </div>
                    </section>
                    <section className='singlePage'>
                        
                        <div className='container'>
                           
                            <div className='para'>
                                <h3>Date : {projet.category}</h3>
                                <p>{projet.description}</p>
                                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                            </div>
                            <div className='soical'>
                                <h3>Share : </h3>
                                <img src='https://img.icons8.com/color/48/000000/facebook-new.png'  alt="" />
                                <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png'  alt="" />
                                <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png'  alt="" />
                            </div>
                        </div>
                    </section>
                   <Scrolltotop/>
                </>
            ) : (
                "no"
            )}
        </>
    )
}
export default Blogdetails;