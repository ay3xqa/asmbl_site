import React from 'react';
import './CSS/Hero.css';

export default function Hero() {
    return (
        <div className='Hero'>
            <div className='Hero-container l-container'>
                <h1 className='Hero-title'>ASMBL</h1>
                <h3 className='Hero-description'>Some text that will be the open for the website</h3>
                <img className='Hero-image' alt="" />
                <div className='Hero-formContainer'>
                    <input id='name' type='text' value='Name' />
                    <input id='email' type='text' value='Email' />
                    <div className='Hero-button'>Join Waitlist</div>
                </div> 
            </div>
        </div>
    )
}