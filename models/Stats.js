const statArray = require('../database/users_statistic');
const Users     = require('../models/Users');
const array     = require('lodash/array');



class Stats extends Users {
    constructor() {
        super()
        this.params = {
            Limit: 50,
            Offset: 0,
            SortField: 'id',
            SortOrder: 'asc',
            DateFrom: null, 
            DateTo: null
        }
    }

    /*
        Вместо одного запроса к бд - городим костыли
    */
    getStatByUserID(id, queryParams = {DateFrom: null, DateTo: null}) {
        console.log(id, queryParams)
        const user = this.getUserById(id)
        if (!user) {
            return null
        }
    
        const filtered =  statArray.filter( item => item.user_id === +id)
        if (!filtered) {
            return null
        }
        const {DateFrom, DateTo} = queryParams
        const userStat = []
        filtered.forEach(user => {
            const {date, page_views, clicks} = user
            if (DateFrom || DateTo) {
                const parsedDate = parseInt(Date.parse(date), 10)
                if (DateFrom && DateTo) {
                    if ( (+DateFrom <= parsedDate) && (parsedDate <= +DateTo) ) {
                        userStat.push({date, page_view: page_views || 0, clicks: clicks || 0})
                    }
                } else if (+DateFrom <= parsedDate) {
                    userStat.push({date, page_view: page_views || 0, clicks: clicks || 0})
                } else if (parsedDate <= +DateTo) {
                    userStat.push({date, page_view: page_views || 0, clicks: clicks || 0})
                }
            } else {
                // default push
                userStat.push({date, page_view: page_views || 0, clicks: clicks || 0})
            }
        })

        return {
            user_id: id,
            userStat
        }
    }

    getStatsByUserID(id) {
        const user = this.getUserById(id)
        if (!user) {
            return null
        }
        const filtered = statArray.filter( item => item.user_id === +id) 

        let total_clicks = 0
        let total_page_views = 0

        filtered.forEach(item => {
            total_clicks += +item.clicks || 0
            total_page_views += +item.page_views || 0
        });
        return {
            total_clicks, total_page_views, details: filtered
        }
    }


    getAllStats(paramsQuery) {
        const {Limit, Offset, SortOrder, SortField} = paramsQuery        

        // get sorted users
        const usersList = this.getAllUsers()

        if (!usersList) {
            return null
        }

        const start        = +Offset || this.params.Offset
        const limitPerPage = +Limit || this.params.Limit
        const end          = start + limitPerPage
        const usersPerPage = array.slice(usersList, start, end)

        let userList = []

        usersPerPage.forEach(user => {
            const userExtended = this.getStatsByUserID(user.id)
            if (userExtended) {
                
                const {total_clicks, total_page_views} = userExtended
                const userItem = {...user, total_clicks, total_page_views}
                userList.push(userItem)
            }
        })

        return {
            usersCount: usersList.length,
            userList
        }
    }
}

module.exports = Stats;