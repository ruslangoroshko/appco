const usersArray = require('../database/users');

class Users {
    constructor() {
        this.users = usersArray
    }

    getAllUsers() {
        return this.users
    }

    getUserById(id) {
        const userList = this.getAllUsers()
        if (!userList) {
            return null
        }
        const userById = userList.find( user => user.id === id)
        if (!userById) {
            return null
        }
        return userById
    }
}

module.exports = Users