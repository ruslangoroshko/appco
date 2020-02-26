import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import * as _ from 'lodash/array'

import './Pagination.scss'


export const Pagination = ({itemsCount = 0, limit = 50, page = 1}) => {

	const [activePage, setActivePage] = useState(1)
	const [pagesChunks, setPagesChunks] = useState([])
	const [activeIndex, setActiveIndex] = useState(0)

	const [lastPage, setLastPage] = useState(0)


	useEffect(() => {
		initChunks()
	}, [itemsCount])

	useEffect(() => {
		setActivePage(page)
	}, [page])

	useEffect(() => {
		for (let i = 0; i < pagesChunks.length; i++) {
			if (pagesChunks[i].includes(page)) {
				setActiveIndex(i)
			}
		}
	})


	const initChunks = () => {
		let pages_array = []
		for (let i = 1; i <= itemsCount/limit; i++) {
			pages_array.push(+i)
		}
		const pages_chunks = pages_array ? _.chunk(pages_array, 5) : []
		setPagesChunks(pages_chunks)
		setLastPage(itemsCount/limit)
	}


	if (!pagesChunks || !pagesChunks.length) {
		return null
	}

	const isFirstPage = activePage - 1 ? false : true
	const isLastPage = lastPage - activePage ? false : true

	let prevLinkClass = "pagination__item__btn prev"
	prevLinkClass = isFirstPage ? prevLinkClass + " dissabled" : prevLinkClass
	let nextLinkClass = "pagination__item__btn next"
	nextLinkClass = isLastPage ? nextLinkClass + " dissabled" : nextLinkClass

    return (
        <ul className="pagination">
			<li className="pagination__item">

				<Link
					className={prevLinkClass}
					to={isFirstPage ? "?page=1" : `?page=${activePage - 1}`}
					></Link>
				
			</li>

			{pagesChunks[activeIndex].map((page) => (
				<li key={page} className="pagination__item">
					<Link 
						to={`?page=${page}`}
						className={+page === +activePage ? "pagination__item__link active" : "pagination__item__link"}
						>{page}</Link>
				</li>
			))}
			
			<li className="pagination__item">
				<Link
					className={nextLinkClass}
					to={isLastPage ? "?page=20" : `?page=${activePage + 1}`}
					></Link>
			</li>
		</ul>
    )
}