import Prenom from "../Prenom";
import Nom from "../Nom";
import Comments from "../Comments";
import { useState } from "react";
import './index.css'

const commentsInitiale = [
    {
        name: "NameToto",
        firstname: "firstnameToto",
        text: "lorem1",
    },
    {
        name: "NameTata",
        firstname: "firstnameTata",
        text: "lorem2",
    },
    {
        name: "NameTiti",
        firstname: "firstnameTiti",
        text: "lorem3",
    },
];

const Commentaire = () => {
    const [comments, setComments] = useState(commentsInitiale);
    const [newStudentFirstname, setNewStudentFirstname] = useState("")
    const [newStudentname, setNewStudentname] = useState("")
    const [NewText, setNewText] = useState("")
    
    return (
        <div className="Comments">
            {comments.map((personne, index) => {
                return (
                    <div key={index} className='container' >
                        Personne:
                        <div
                            onClick={() => {
                                const commentsCopy = [...comments];
                                commentsCopy.splice(index,1);
                                console.log(index);
                                setComments(commentsCopy);
                            }}
                        >
                            x
                        </div>
                        <Prenom propsFirstname={personne.firstname} />
                        <Nom propsName={personne.name} />
                        <Comments propsCommentaire={personne.text} />
                        {/* supprimer l'eleve */}
                        
                    </div>
                        
)
            })
            }
            <div className="formulaire">
                Creaction d'un commentaire
                <div className="containerpersonne">
                    <div className="Form-container">
                        <label>Prenom</label>
                        <input placeholder="Entrer votre prénom"
                            value={newStudentFirstname}
                            onChange={(event) => {
                                setNewStudentFirstname(event.target.value)
                            }}
                        />
                        <div>{newStudentFirstname}</div>
                    </div>
                    <div className="Form-container">
                        <label>Nom</label>
                        <input placeholder="entrez un nom" value={newStudentname}
                            onChange={(event) => {
                                setNewStudentname(event.target.value)
                            }} />
                        <div>{newStudentname}</div>
                    </div>
                    
                    <div className="Form-container">
                        <label>Commentaire</label>
                        <textarea placeholder="entrez votre commentaire" value={NewText}
                            onChange={(event) => {
                                setNewText(event.target.value)
                            }} />
                        <div>{NewText}</div>
                    </div>
                    
                    <button 
                        onClick={() => {
                            const commentsCopy = [...comments];
                            commentsCopy.push({
                                name: newStudentname,
                                firstname: newStudentFirstname,
                            });
                            setComments(commentsCopy);
                            setNewStudentFirstname("");
                            setNewStudentname("");
                        }}
                    >Confirmer
                    </button>
                </div>
            </div>
            <div>
            </div>
        </div>
)
} 
export default Commentaire;