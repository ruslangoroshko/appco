import React from 'react'
import {Link} from 'react-router-dom'

import headerIphoneFull from '../images/header_iphone.svg'
// import headerIphoneMin from './images/header_iphone-min.png'


export const Header = () => {

    return (
        <header className="main-header">
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-12 col-md-8">
	    				<h1 className="main-header__title">
	    					<b>Brainstorming</b> for <br/> desired perfect Usability
	    				</h1>
	    				<p className="main-header__p text-white">
	    					Our design projects are fresh and simple and will benefit <br/>your business greatly. Learn more about our work!
	    				</p>
						<Link to="/users" className="accent-link accent-link__white">View Stats</Link>
	    				
	    			</div>
	    			<div className="col-12 col-md-4 d-flex justify-content-center align-items-end">
	    				<img className="img-response main-header__image" src={headerIphoneFull} alt="desc" />
	    			</div>
	    		</div>
	    	</div>
	    </header>
    )
}