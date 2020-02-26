import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {useScroll} from '../../hooks/scroll.hook'

import './NavBar.scss'


export const NavBar = () => {

    const {scrollY} = useScroll()
    const history = useHistory()

    const isHome = history.location.pathname === "/" ? true : false

    
    let headerClassDef = isHome ? 'main-navbar-line' : 'main-navbar-line main-navbar-line__not-home' 
    let headerClass = scrollY > 50 ? headerClassDef + ' main-navbar-line--scroll' : headerClassDef

    return (
        
		// main-navbar-line__not-home main-navbar-line--scroll
	
	    <div className={headerClass}>
	    	<div className="container">
	    		<div className="row align-items-center main-navbar-line__inner">
	    			<div className="col-12">
                        <NavLink to="/" exact className="logo-link">AppCo</NavLink>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    )
}