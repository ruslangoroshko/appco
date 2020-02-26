import React from 'react'

import basic from '../images/pricing/basic.svg'
import standart from '../images/pricing/standart.svg'
import unlimited from '../images/pricing/unlimited.svg'


export const Pricing = () => {
    return (
        <section className="section-pricing">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section_title">
                            <b>Afforadble Pricing and Packages</b> <br/>choose your best one
                        </h2>
                        <p className="text-center">
                            Monotonectally grow strategic process improvements vis-a-vis <br/>integrated resources.
                        </p>
                        <ul className="pricing-list">
                            <li className="pricing-list__item pricing-list__item--border">
                                <h3 className="pricing-list__item-title">Basic</h3>
                                <img src={basic} alt="" className="img-response"/>
                                <span className="pricing-list__item-price">$29</span>
                                <p>Push Notifications <br/>Data Transfer <br/>SQL Database <br/>Search & SEO Analytics <br/>24/7 Phone Support <br/>2 months technical support <br/>2+ profitable keyword</p>
                                <a href="/" className="accent-link">Purchase now</a>
                            </li>
                            <li className="pricing-list__item pricing-list__item--shadow">
                                <h3 className="pricing-list__item-title">Standart</h3>
                                <img src={standart} alt="" className="img-response"/>
                                <span className="pricing-list__item-price pricing-list__item-price--accent">$149</span>
                                <p>Push Notifications <br/>Data Transfer <br/>SQL Database <br/>Search & SEO Analytics <br/>24/7 Phone Support <br/>2 months technical support <br/>2+ profitable keyword</p>
                                <a href="/" className="accent-link">Purchase now</a>
                            </li>
                            <li className="pricing-list__item pricing-list__item--border">
                                <h3 className="pricing-list__item-title">Unlimited</h3>
                                <img src={unlimited} alt="" className="img-response"/>
                                <span className="pricing-list__item-price">$39</span>
                                <p>Push Notifications <br/>Data Transfer <br/>SQL Database <br/>Search & SEO Analytics <br/>24/7 Phone Support <br/>2 months technical support <br/>2+ profitable keyword</p>
                                <a href="/" className="accent-link">Purchase now</a>
                            </li>
                        </ul>
                        <p className="text-center section-pricing_p">
                            If you need custom services or Need more? <a href="#" className="link link--bold">Contact us</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}