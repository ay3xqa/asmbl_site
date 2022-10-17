import React from 'react';
import './CSS/Hero.css';
import image from '../heroImage.png'

export default function Hero() {
    return (
        <section className='Hero'>
            <div className='Hero-container l-container'>
                <h1 className='Hero-title'>ASMBL</h1>
                <h3 className='Hero-description'>Some text that will be the open for the website</h3>
                <img className='Hero-image' src={image} alt="" />
                <div className='Hero-formContainer'>
                    <input id='name' type='text' placeholder='Name' />
                    <input id='email' type='text' placeholder='Email' />
                    <div className='Hero-button'>Join Waitlist</div>
                </div> 
            </div>
            {/* <section className='Hero-curves'></section> */}
            <div class="custom-shape-divider-bottom-1666046036">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        </section>
    )
}