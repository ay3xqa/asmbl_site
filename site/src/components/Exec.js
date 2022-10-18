import React from 'react';
import './CSS/Exec.css';
import Alex from '../Alex.png'
import Lucas from '../Lucas.png'
import Abhinav from '../Abhinav.png'
import Bhargav from '../Bhargav.png'

export default function Exec() {
    return (
        <section className='Exec'>
            <div className='Exec-container'>
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