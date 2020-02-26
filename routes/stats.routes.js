const {Router}  = require('express');
const router    = Router();

const useStats  = require('../models/Stats');
const Stats     = new useStats();

router.get('/stats', (req, res) => {
    const {Limit, Offset, SortOrder, SortField} = req.query
    const params = {Limit, Offset, SortOrder, SortField}
    
    const stats = Stats.getAllStats(params)

    try {
        if(!stats) {
            return res.status(400).json({message: 'Stats list dosn`t exist'})
        }
        res.json({stats})
    } catch (e) {
        res.status(500).json({message: 'catching error'})
    }
    
})

router.get('/stats/:id', (req, res) => {
    const {DateFrom, DateTo} = req.query
    const params = {DateFrom, DateTo}
    
    const stat = Stats.getStatByUserID(+req.params.id, params)

    try {
        if(!stat) {
            return res.status(400).json({message: 'Stat dosn`t exist'})
        }
        res.json({stat})

    } catch (e) {
        res.status(500).json({message: 'catching error'})
    }
    
})

module.exports = router;