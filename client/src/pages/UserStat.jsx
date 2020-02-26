import React, { useState, useEffect, useCallback } from 'react';
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'

import {Breadcrumbs, Char} from '../components/'


export const UserStat = () => {
    
    const {id} = useParams()
    const {request} = useHttp()

    const [breadcrumb, setBreadcrumbs] = useState([
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
            isActive: false
        }
    ])

    const [chartData, setChartData] = useState([])

    useEffect(() => {
        initUser(id)        
    }, [])


    const initUser = async id => {
        try {
            const data = await request(`/api/users/${id}`, 'GET')
            if ("user" in data) {
                console.log(data)
                const title = data.user.first_name + ' ' + data.user.last_name
                const user = {
                    id: 3,
                    title,
                    path: `/user/${data.user.id}`,
                    isActive: true
                }

                getStat(id)

                let nextBreadCrumb = breadcrumb
                nextBreadCrumb.push(user)
                setBreadcrumbs({...breadcrumb, ...nextBreadCrumb})
                
            }

        } catch (e) {
            console.log(e)
        }
    }

    /**

     */
    const dateFormat = (date, format = "d-m-Y H:i:s", fixTimezone = true) => {
        let dateObj = new Date(date);
        //dateObj = fixTimezone ? new Date(date + (3600000)) : dateObj;
        let m = dateObj.getMonth() + 1;
        let d = dateObj.getDate();
        let i = dateObj.getMinutes();
        let h = dateObj.getHours();
        let s = dateObj.getSeconds();
        return format
            .replace(/m/g, m < 10 ? "0" + m : m)
            .replace(/d/g, d < 10 ? "0" + d : d)
            .replace(/Y/g, dateObj.getFullYear())
            .replace(/H/g, h < 10 ? "0" + h : h)
            .replace(/i/g, i < 10 ? "0" + i : i)
            .replace(/s/g, s < 10 ? "0" + s : s)
    }


    const getPeriodArray = data => {

        // sort array min to max
        const sortData = data.sort( (a, b) => {
          return Date.parse(a.date) - Date.parse(b.date)
        })

        let minDay = sortData[0]
        let maxDay = sortData[sortData.length - 1]
      
        let newArr = []
        let i = 0
        let isWork = true
      
        while(isWork) {
            let currentDate = minDay.date
            let current = new Date(currentDate)
            current = current.setDate(current.getDate() + i);

            let issetDay = false
            const res = sortData.find(item => {
                if (item.date === dateFormat(current, "Y-m-d")) {
                    issetDay = item
                }
            })
            if (issetDay) {
                newArr.push(issetDay)
            } else {
                let data = {
                    date: dateFormat(current, "Y-m-d"),
                    count: 0
                }
                newArr.push(data)
            }
            i++

            if (issetDay.date == maxDay.date) {
                isWork = false
                console.log('while stop...')
            }
            // debug if overflow
            if (i > 50) {
                isWork = false
            }
        }
        return newArr
    }

    const getStat = async (id, param = {DateFrom: null, DateTo: null}) => {
        try {
            const {DateTo, DateFrom} = param
            /* Select default per WEEK */
            // const toDay = new Date().getTime()
            // const week = 604800000
            // const dateFromDef = DateFrom || toDay - week
            // const dateToDef = DateTo || toDay
            const data = await request(`/api/stats/${id}?DateFrom=${DateFrom || ''}&DateTo=${DateTo || ''}`, 'GET')
                .then(res => {
                    const {userStat} = res.stat
                    const allData = getPeriodArray(userStat)
                    setChartData(allData)
                    console.log(allData)
                })
            
            //setClickData(clickDataStat)
            //setViewData(viewDataStat)


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
                    </div>

                    <div className="col-12" style={{marginTop: "30px"}}>
                        <h4>Clicks</h4>
                    </div>
                    <div className="col-12">
                        {chartData ? <Char data={chartData} show={"clicks"} /> : null}
                    </div>

                    <div className="col-12" style={{marginTop: "30px"}}>
                        <h4>Views</h4>
                    </div>
                    <div className="col-12">
                        {chartData ? <Char data={chartData} show={"views"} /> : null}
                    </div>
                </div>
            </div>
        </section>
    )
}