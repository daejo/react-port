import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';
import sendIcon from '../../assets/img/paperplane.png';
import emailIcon from '../../assets/img/email-icon.png';
import addressIcon from '../../assets/img/address-icon.png';
import phoneIcon from '../../assets/img/phone-icon.png';

function Contact() {
    const [formState, setFormState] = useState( { name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
            } else {
                setErrorMessage('');
            }    
        }
        
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact-box">
            <div id="left">
                <h1>Send me a message</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <p><label htmlFor="name">Name:</label></p>
                        <input class="textbox" type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    </div>
                    <div>
                        <p><label htmlFor="email">Email address:</label></p>
                        <input class="textbox" type="email" defaultValue={email} onBlur={handleChange} name="email" />
                    </div>
                    <div>
                        <p><label htmlFor="message">Message:</label></p>
                        <textarea class="textbox" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <p>
                        <button class="submit-form" type="submit"><img src={sendIcon} style={{ width:"20%"}} alt='paper plane icon' /> Submit</button>
                    </p>
                </form>
            </div>

            <div id="right">
                <h1>Contact info</h1>
                    <div id="contact-info">
                        <p><img src={phoneIcon} style={{ width:"6%"}} alt="phone icon"/>661-437-9550</p>
                        <p><img src={emailIcon} style={{ width:"6%"}} alt="phone icon"/>daejo@icloud.com</p>
                        <p><img src={addressIcon} style={{ width:"6%"}} alt="phone icon"/>San Franciso, CA</p>
                    </div>
            </div>
        </section>
      )
}

export default Contact;