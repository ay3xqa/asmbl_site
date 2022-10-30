import React from 'react';
import './CSS/Core.css';
import GPU from '../gpuSmall.png';
import CPU from '../cpuSmall.png';

export default function Core() {
    return (
        <section className='Core'>
            <div className='Core-container'>
                <div className='Core-contentWrapper'>
                    <h3 className='Core-header'>Why ASMBL</h3>
                    <p className='Core-description'>
                    This is not to say that we did not have any places where we were proud of our team performance. 
                    For our Evergrain deliverable due recently, we changed a lot of strategy leading up to the deadline (detailed in the Team Improvement section), 
                    which helped to create a cohesive deliverable.
                    <br></br>
                    In terms of improvement, we used reflections to think about what we can do to keep making progress overtime. 
                    <br></br>After receiving the scores of the first deliverable for Strategy and Systems, we were upset at first because the score did not meet our expectations.
                    But, we were able to quickly cheer ourselves up and think about what we can do to improve. 
                    </p>
                    <div className='Core-imageWrapper'>
                        <img className='Core-image' alt='' src={GPU} />
                    </div>
                </div>
                <div className='Core-contentWrapper'>
                    <h3 className='Core-header'>Value Prop</h3>
                    <p className='Core-description'>
                    We first looked over the feedback again and realized that there was a lack of consistency between each section of our project. This is because we split up the work and just combined it (pooled interdependence), which resulted in a lack of cohesiveness. For upcoming deliverables, we knew to foster reciprocal interdependence and really focus on integrating the individual parts that we complete when putting together the final product. For example, for the recent Evergrain deliverable due (IIP1), we set our own deadline for when each individual part should be completed. This deadline was created several days in advance for when our actual project was due. 
                    </p>
                    <div className='Core-imageWrapper'>
                        <img className='Core-image' alt='' src={CPU} />
                    </div>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1666050734">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    )
}