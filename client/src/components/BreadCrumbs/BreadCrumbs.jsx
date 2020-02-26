import React, { useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import './BreadCrumbs.scss'

export const Breadcrumbs = ({data = []}) => {

	const [links, setLinks] = useState([])
	useEffect(() => {
		setLinks(data)
	}, [])


	if (!links || !links.length) {
		return null
	}
    return (
        <ul className="breadcrumbs">
			{links.map( item => (
				<li key={item.id} className="breadcrumbs__item">
					{}
					<NavLink 
						className={
							item.isActive ? (
								"breadcrumbs__item__link breadcrumbs__item__link--active"
							) : (
								"breadcrumbs__item__link"
							)}
							to={item.path} exact>{item.title}</NavLink>
				</li>
			))}
		</ul>
    )
}