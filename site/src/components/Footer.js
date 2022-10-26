import React from 'react';
import './CSS/Footer.css';
import {IconContext} from 'react-icons';
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa' 

export default function Footer() {
    return (
        <section className='Footer'>
            <div>
                <div className='Footer-button'>Contact Us</div>
                <div className='Footer-icons'>
                <ul className='iconList'>
                    <li>
                    <a className='git' href = "https://github.com/ay3xqa" target="_blank" rel="noreferrer">
                    <FaGithub className='react-icon' size='2em'/>
                    </a>
                    </li>
                    <li>
                    <a href='https://www.instagram.com/al3xyu/' target='_blank' rel="noreferrer">
                    <FaInstagram className='react-icon' size='2em'/>
                    </a>
                    </li>
                    <li>
                    <a href='https://www.linkedin.com/in/alex-yu-590b871b7/' target='_blank' rel="noreferrer">
                    <FaLinkedin className='react-icon' size='2em'/>
                    </a>
                    </li>
                    <li>
                    <a href='https://twitter.com/theyvnglex' target='_blank' rel="noreferrer">
                    <FaTwitter className='react-icon' size='2em'/>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </section>
    )
}