import './index.css'
import contactimage from '../../assets/online-web-design.jpg';

// import React, { useState } from 'react';

const Contact = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    

    // const submitRequest = async (e) => {
    //     e.preventDefault();
    //     console.log({ name, email, message });
    //     const response = await fetch("http://localhost:3000/contact/sendcontact", {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify({  name, email, message })
    //     });
    //     const resData = await response.json();
    //     if (resData.status === 'success') {
    //         alert("Message Sent.");
    //         this.resetForm()
    //     } else if (resData.status === 'fail') {
    //         alert("Message failed to send.")
    //     }
    // };
    
    
    return (
        
        <div className="contact" style={{ backgroundImage: `url(${contactimage})` }}  >
            
            <div className="form-contact">
                
                <form  >
                    
                    <h1>Contacter-moi</h1>
                    
                    <div className="input-form">
                        <input type="name" id="name" name="name" placeholder="ton name" className='inform'
                            // onChange={e => setName(e.target.value)}
                            // value={name}
                        />
                    </div>
                    <div className="input-form">
                        <input type="email" id="email" name="email" placeholder="ton email" className='inform'
                            // onChange={e => setEmail(e.target.value)}
                            // value={email}
                        />
                    </div>
                    
                    <div className="input-form">
                        <textarea name="comment" id="message" cols="30" rows="10" required placeholder='Entrer votre message'
                            // onChange={e => setMessage(e.target.value)}
                            // value={message}
                        ></textarea>
                    </div>
                    
                    <div className="input-form">
                        <button type='submit' >Submit</button>
                    </div>
                    
                </form>
                
            </div>
            <div className="espace-contact">
                
                <div className="box-text">
                    <p>erinawambiekele@gmail.com</p>
                </div>
                
                <div className="box-text">
                    <p>07.61.24.92.14</p>
                </div>
                
                <div className="box-text">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            
            </div>
        </div>
)
    
}

export default Contact