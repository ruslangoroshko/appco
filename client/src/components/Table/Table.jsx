import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'

import './Table.scss'

export const Table = ({list}) => {
	const history = useHistory()
	const {userList} = list

	const [users, setUsers] = useState({})

	useEffect(() => {
		setUsers(userList)
	},[userList])

	const openUser = id =>{
		history.push(`/user/${id}`)
	}

    return (
        <table className="flex-table">
			<thead className="flex-table__thead">
				<tr className="flex-table__tr">
					<th className="flex-table__tr__th text-center">Id</th>
					<th className="flex-table__tr__th">First name</th>
					<th className="flex-table__tr__th">Last name</th>
					<th className="flex-table__tr__th">Email</th>
					<th className="flex-table__tr__th text-center">Gender</th>
					<th className="flex-table__tr__th text-center">IP address</th>
					<th className="flex-table__tr__th text-center">Total click</th>
					<th className="flex-table__tr__th text-center">Total page views</th>
				</tr>
			</thead>
						
			<tbody className="flex-table__tbody">
				<TableRow row={users} handleOpenUser={openUser} />	
			</tbody>
		</table>
    )
}

// можно вынети в другой компонент как представление
//
const TableRow = ({row, handleOpenUser}) => {
	if (!row) {
		return (
			<tr  className="flex-table__tr not-hover">
				<td className="flex-table__tr__td text-center" colSpan="8">Not get data...</td>
			</tr>
		)
	}
	if (!row.length) {
		return (
			<tr  className="flex-table__tr not-hover">
				<td className="flex-table__tr__td text-center" colSpan="8">Empty list...</td>
			</tr>
		)
	}
	return row.map(item => {
		const {id, first_name, last_name, email, gender, ip_address, total_clicks, total_page_views} = item
		return (
			<tr key={id} className="flex-table__tr" onClick={() => handleOpenUser(id)}> 
				<td className="flex-table__tr__td text-center">{id}</td>
				<td className="flex-table__tr__td">{first_name}</td>
				<td className="flex-table__tr__td">{last_name}</td>
				<td className="flex-table__tr__td">{email}</td>
				<td className="flex-table__tr__td text-center">{gender}</td>
				<td className="flex-table__tr__td text-center">{ip_address}</td>
				<td className="flex-table__tr__td text-center">{total_clicks}</td>
				<td className="flex-table__tr__td text-center">{total_page_views}</td> 
			</tr>
		)
	})	
}