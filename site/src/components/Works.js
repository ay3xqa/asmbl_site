import React from 'react';
import './CSS/Works.css';
import image from '../gpu.png';

export default function Works() {
    return (
        <section className='Works'>
            <div className='Works-container'>
                <div className='Works-contentWrapper'>
                    <h3 className='Works-title'>How It Works</h3>
                    <p className='Works-description'>
                    Three dimensions we have outlined in class that relate to our team’s effectiveness include: performance, improvement, and satisfaction. Upon completion of our strategy and systems class and our first Evergrain deliverable, we are proud of the work we have put forth, but we also know that there are ways to improve our team effectiveness. 
                        <br></br>
                        <br></br>
                        With regards to performance, we would say that we are doing well but have room for improvement. In our last Strategy and System’s case, we received a “B” and we were immediately disappointed.
                        <br>
                        </br>
                        <br></br>
                        However, there were two choices that we could have made at that moment: learn from our failure and figure out ways to improve or sulk and not grow from our mistakes. We chose the route to grow and improve from our mistakes.
                    </p>
                </div>
                <div className='Works-imageWrapper'>
                    <img className='Works-image' alt='' src={image} />
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1666050241">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    )
}