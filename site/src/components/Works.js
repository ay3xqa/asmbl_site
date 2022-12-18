import React from 'react';
import './CSS/Works.css';
import image from '../gpu.png';
import './CSS/Design.css';

export default function Works(){
    const domRef = React.useRef();
  
    const [isVisible, setVisible] = React.useState(false);
  
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        // In your case there's only one element to observe:     
        if (entries[0].isIntersecting) {
        
          // Not possible to set it back to false like this:
          setVisible(true);
          
          // No need to keep observing:
          observer.unobserve(domRef.current);
        }
      });
      
      observer.observe(domRef.current);
      
      return () => observer.disconnect();
    }, []);

    return (
        <section className='Works'>
            <div ref={ domRef } className={ `Works-container fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
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
                    {/* <iframe title="worksModel" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking transparent" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/42393304578e4f1ab0ea3c7338aeea88/embed?autostart=1&camera=0&transparent=1"> </iframe> */}
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