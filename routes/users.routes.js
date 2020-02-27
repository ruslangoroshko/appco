const {Router} = require('express')
const router = Router();
const useUsers = require('../models/Users');

const Users = new useUsers();


router.get('/users', async (req, res) => {
    const users = await Users.getAllUsers()
    try {
        if(!users) {
            return res.status(400).json({message: 'Users list dosn`t exist'})
        }
        const usersCount = users.length
        res.json({usersCount, users})
    } catch (e) {
        res.status(500).json({message: 'catching error'})
    }
})


router.get('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id, 10)
    const user = await Users.getUserById(userId)
    try {
        if(!user) {
            return res.status(400).json({message: 'User dosn`t exist'})
        }
        res.json({user})
    } catch (e) {
        res.status(500).json({message: 'Catching error'})
    }
})

module.exports = router