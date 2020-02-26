import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'

import {Breadcrumbs, Table, Pagination} from '../components/'

import {useHttp} from '../hooks/http.hook'



export const Users = () => {
    const history = useHistory()
    const {request} = useHttp()
    
    const initParams = {
        Limit: 50,
        Offset: 0
    }

    const breadcrumb = [
        {
            id: 0,
            title: 'Main page',
            path: '/',
            isActive: false
        },
        {
            id: 1,
            title: 'User statistics',
            path: '/users',
            isActive: true
        }
    ]

    const [params, setParams]         = useState(initParams)
    const [usersData, setUsersData]   = useState([])
    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        initPage()
    }, [history.location.search])
    useEffect(() => {
        getData(params)
    }, [params])

    useEffect(() => {
        changeParams()
    }, [activePage])


    const changeParams = () => {
        const {Limit} = params
        const pagedOffset = activePage - 1
        const newOffset = +Limit * pagedOffset
        setParams({...params, Offset: newOffset})
    }

    const initPage = () => {
        const params = new URLSearchParams(history.location.search)
        const page = params.get('page') || 1
        setActivePage(+page)
    }

    const getData = async (queryParams = params) => {
        const {Limit, Offset} = queryParams
        try {
            const data = await request(`/api/stats?Limit=${Limit}&Offset=${Offset}`, 'GET')
            if ("stats" in data) {
                setUsersData({...usersData, ...data.stats})
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section className="page-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumbs data={breadcrumb} />

                        <h2 className="page-title">Users statistics</h2>

                        <Table list={usersData} />

                        <Pagination 
                            page={activePage}
                            itemsCount={usersData.usersCount} 
                            limit={params.Limit} />
                    </div>
                </div>
            </div>
        </section>
    )
}