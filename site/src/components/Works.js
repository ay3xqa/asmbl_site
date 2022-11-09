import React from 'react';
import './CSS/Works.css';
import image from '../gpu.png';
import './JS/Animations.js'

export default function Works() {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    return (
        <section className='Works'>
            <div className='Works-container star'>
            <div ref={ref}>{isVisible && `Yep, I'm on screen`}</div>
                <div className='Works-contentWrapper'>
                    <h3 className='Works-title'>How It Works</h3>
                    <div className='Works-description'>
                    <p>Custom PC Building experience with a compatibility checker, filterable component categories, and 3D visualization of your build in real-time</p>
                    <p>Continuosly updating product library with component specification comparer</p>
                    <p>Community of PC Enthusiasts and Builders</p>
                    <p>Original and Aggregated Build Guides with PC Building Best Practices and sample builds</p>
                    </div>
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