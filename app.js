const express   = require('express');
const config    = require('config');

// CUSTOM
const PORT      = process.env.PORT || config.get('port');
const app       = express();


// ROUTER
// /users  /users/:id
app.use('/api', require('./routes/users.routes'))

// /stats
app.use('/api', require('./routes/stats.routes'))

app.use(express.json({extended: true}))

// users
// users/:id

app.get('/api', (req, res) => {
    res.json({message: "Connetction to API work!"})
})

// START
async function start() {
    try {
        
        app.listen(PORT, () => {
            console.log(`Server has been started in port: ${PORT}`)
        });

    } catch(e) {
        console.log(`Server starting error: ${e}`)
    }
}
start()
