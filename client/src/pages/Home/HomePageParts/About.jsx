import React from 'react'

import aboutMacbook from '../images/about_macbook.png'


export const About = () => {
    return (
        <section className="section-about">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 pos-r">
                        <img src={aboutMacbook} alt="about, macbook" className="img-response section-about__image"/>
                        <h2 className="section-about__title text-white">Start Managing your apps <br/>business, more faster</h2>
                        <p className="text-white">
                            Objectively deliver professional value with diverse web-readiness. <br/>Collaboratively transition wireless customer service without <br/>goal-oriented catalysts for change. Collaboratively.
                        </p>
                        <a href="/" className="accent-link accent-link__white">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}