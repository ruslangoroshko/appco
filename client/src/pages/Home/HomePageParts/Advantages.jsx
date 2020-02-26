import React from 'react'

import cleanDesign from '../images/advantages/clean-design.svg'
import secureData from '../images/advantages/secure-data.svg'
import retinaReady from '../images/advantages/retina-ready.svg'


export const Advantages = () => {
    return (
        <section className="section-advantages">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section_title">
                            Why <b>small business owners <br/>love</b> AppCo?
                        </h2>
                        <p className="text-center">
                            Our design projects are fresh and simple and will benefit your business <br/>greatly. Learn more about our work!
                        </p>
                        <ul className="advantages-list">
                            <li className="advantages-list__item">
                                <img src={cleanDesign} alt="advantages, icon"/>
                                <h3 className="advantages-list__item-title">Clean Design</h3>
                                <p>Increase sales by showing true dynamics of your website.</p>
                            </li>
                            <li className="advantages-list__item">
                                <img src={secureData} alt="advantages, icon"/>
                                <h3 className="advantages-list__item-title">Secure Data</h3>
                                <p>Build your online store’s trust using Social Proof & Urgency.</p>
                            </li>
                            <li className="advantages-list__item">
                                <img src={retinaReady} alt="advantages, icon"/>
                                <h3 className="advantages-list__item-title">Retina Ready</h3>
                                <p>Realize importance of social proof in customer’s purchase decision.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}