import React from 'react';
import '../../App.css';
import './Home.css';
import AboutUsSection from '../AboutUsSection';
import HeroSection from '../HeroSection';
import JoinSection from '../JoinSection';

function Home(){
    return(
        <div className="body-content">
            <HeroSection /> 
            <AboutUsSection/>
            <JoinSection/>
        </div>
    );
}

export default Home;