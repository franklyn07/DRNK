import React from 'react'
import './HeroSection.css';

function HeroSection(){

    return (
        <section className='hero-container'>
            <video src="/videos/CdDrive.mp4" autoPlay loop muted />
            <h1>EXALT YOUR SENSES</h1>
            <p>Drnk for the experience</p>
        </section>
    )
}

export default HeroSection
