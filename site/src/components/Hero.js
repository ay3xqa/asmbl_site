import React from 'react';
import './CSS/Hero.css';
import './CSS/Design.css';
import logo from '../logo_transparent.png';

export default function Hero() {
    return (
        <section className='Hero'>
            <div className='Hero-container l-container'>
                {/* <h1 className='Hero-title'>ASMBL</h1> */}
                <img className='Hero-logo' src={logo} alt="" />
                <h3 className='Hero-description line-1 anim-typewriter'>Reimagining the PC Building</h3>
                <h3 className='Hero-description line-1 anim-typewriter2'>Experience and Community</h3>
                {/* <img className='Hero-image' src={image} alt="" /> */}
                <div className='Hero-sketchContainer'>
                    <iframe title="Hero Model" id="heroModel" width="100%" scrolling="0" 
                    src="https://sketchfab.com/models/8d913bda48f84217902e6829982c494f/embed?ui_infos=0&amp;ui_watermark=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_inspector=0&amp;ui_annotations=0&amp;ui_stop=0&amp;ui_vr=0&amp;preload=1&amp;autostart=1&amp;ui_hint=2&amp;autospin=0.2&amp;transparent=1">
</iframe>
                </div>
                <div className='Hero-formContainer'>
                    {/* <input id='name' type='text' placeholder='Name' />
                    <input id='email' type='text' placeholder='Email' /> */}
                    <a className='Hero-button' href='https://tinyurl.com/ASMBL-Waitlist' target='_blank' rel="noreferrer">
                        Join Waitlist
                    </a>
                </div> 
            </div>
            <div className="custom-shape-divider-bottom-1666046036">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
            </div>
        </section>
    )
}