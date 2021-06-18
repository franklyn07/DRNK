import React from 'react'
import { Button } from './Button'
import './JoinSection.css';

function JoinSection(){
    return (
        <section className="join-us-container">
            <article className='join-us-article'>
                <h1> DRNK With Us </h1>
                <p> See what we have to offer</p>
            </article>            
            <div className='join-us-btns'>
                <Button
                customClass='btn-products'
                redirect='/products'
                buttonStyle='btn--secondary'
                buttonSize='btn--large'
                >
                Products
                </Button>
                <Button
                customClass='btn-services'
                redirect='/services'
                buttonStyle='btn--secondary'
                buttonSize='btn--large'
                >
                Services
                </Button>
                <Button
                customClass='btn-reachout'
                redirect='/reachout'
                buttonStyle='btn--secondary'
                buttonSize='btn--large'
                >
                Reach Out
                </Button>
            </div>
        </section>
    )
}

export default JoinSection
