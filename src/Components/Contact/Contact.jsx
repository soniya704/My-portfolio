import React, { useRef, useState } from 'react';
import './Contact.css';
import { themeContext } from '../Context';
import { useContext } from 'react';

export const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [done, setDone] = useState(false)
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "bb2d87b8-6b15-4ba5-b99a-56dea740724d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setDone(true)
        }
    }

    return (
        <div className='contact-form'>
            <div className="contact-left">
                <div className="awesome">
                    <span style={{color: darkMode ? 'white' : ''}}>Get In Touch</span>
                    <span>Contact me</span>
                    <div className='blur s-blur' style={{ background: '#abf1ff94' }}></div>
                </div>
            </div>

            <div className="contact-right">
                <form onSubmit={onSubmit}>
                    <input type='text' name='name' className='user' placeholder='Name' />
                    <input type='email' name='email' className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='message' />
                    <input type='submit' value='send' className='button' />
                    <span>{done && 'Thanks for contacting me!'}</span>

                    <div className='blur contact-blur1' style={{ background: 'var(--purple)' }}></div>

                </form>
            </div>

        </div>
    )
}
