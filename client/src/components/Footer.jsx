import React from 'react'

import {useHistory} from 'react-router-dom'


export const Footer = () => {
    const history = useHistory()

    const isHome = history.location.pathname === "/" ? true : false
    const footerClassDef = 'page-footer'
    const footerClass = !isHome ? footerClassDef + ' page-footer__not-home' : footerClassDef

    return (
        <footer className={footerClass}>
            <div className="container">

                {isHome ? (
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-11 col-md-6">
                            <div className="subscribe-form-wrap">
                                <input type="text" placeholder="Enter your email" className="subscribe-form-wrap__input" />
                                <button className="subscribe-form-wrap__btn accent-link">Subscribe</button>
                            </div>
                        </div>
                    </div>
                ) : null}
                
                <div className="row">
                    <div className="col-12">
                        <div className="page-footer__inner">
                            <a href="/" className="logo-link logo-link--footer">AppCo</a>
                            <span className="page-footer__inner-text">All rights reserved by ThemeTags</span>
                            <span className="page-footer__inner-text">Copyrights © 2019.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}