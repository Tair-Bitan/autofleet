const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

const locationService = require('./services/location.service')

// Create and Configure the Express App
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'));

// While on production. Make every server-side-route to match the index.html
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

// Express Endpoints:
app.get('/api/vehicle', async (req, res) => {
    const filterBy = req.query
    try {
        const vehicles = await locationService.query(filterBy)
        res.send(vehicles)
    } catch (err) {
        res.send(err)
    }
})

const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log('Server is running on port: ' + port)
    console.log('I am Here!, I am Here!, stop nagging me..')
})



