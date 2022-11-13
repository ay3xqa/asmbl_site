import React from 'react';
import './CSS/Exec.css';
import Alex from '../Alex.png';
import Lucas from '../Lucas.png';
import Abhinav from '../Abhinav.png';
import Bhargav from '../Bhargav.png';
import './CSS/Design.css';

export default function Core(){
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
        <section className='Exec'>
            <div ref={ domRef } className={ `Exec-container fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
                <h3 className='Exec-header'>Meet the Team </h3>
                <div className='Exec-board'>
                    {/* Abhinav */}
                    <div className='Exec-member'>
                        <div className='Exec-headshotWrapper'>
                            <img className='Exec-headshot' src={Abhinav} alt='' />
                        </div>
                        <h3 className='Exec-name'>Abhinav Sathish</h3>
                        <h3 className='Exec-title'>Founder</h3>
                    </div>

                    {/* Bhargav */}
                    <div className='Exec-member'>
                        <div className='Exec-headshotWrapper'>
                            <img className='Exec-headshot' src={Bhargav} alt='' />
                        </div>
                        <h3 className='Exec-name'>Bhargav Sathish</h3>
                        <h3 className='Exec-title'>Co-Founder</h3>
                    </div>

                    {/* Lucas */}
                    <div className='Exec-member'>
                        <div className='Exec-headshotWrapper'>
                            <img className='Exec-headshot' src={Lucas} alt='' />
                        </div>
                        <h3 className='Exec-name'>Lucas Banerji</h3>
                        <h3 className='Exec-title'>CDO</h3>
                    </div>

                    {/* Alex */}
                    <div className='Exec-member'>
                        <div className='Exec-headshotWrapper'>
                            <img className='Exec-headshot' src={Alex} alt='' />
                        </div>
                        <h3 className='Exec-name'>Alex Yu</h3>
                        <h3 className='Exec-title'>CTO</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}