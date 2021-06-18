import React, { Component } from 'react'
import './AboutUsSection.css'

function AboutUsSection(){
    
    return (
        <section className='about-us-container'>
            <article className="about-us-article">
                <h1>Who do you want to be?</h1>
                <p>We solely exist to take your drinking experience to the next level. Whether you want to taste it yourself or want to share the gift with others, we will deliver. Our premium products are nothing like the ordinary and not for the ordinary. So who do you want to be?</p>
            </article>
            <img src="/images/us.jpg" alt="US"></img>
        </section>
    )
};

export default AboutUsSection;