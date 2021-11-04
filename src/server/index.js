require('dotenv').config()

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const { resolve } = require('dns')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// MeaningCloud API request
const apiKey = process.env.API_KEY
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'

// url input
app.post('/meaning', async (req, res)=>{
    const meaningreq = `${baseURL}?key=${apiKey}&url=${req.body.url}&lang=auto`
    try
    {
        const 
        {
            data: 
            {
                score_tag,
                agreement,
                subjectivity,
                confidence,
                irony
            },
        } = await axios(meaningreq)
        res.send({
            url: req.body.url,
            scoreTag: score_tag,
            agreement: agreement,
            subjectivity: subjectivity,
            confidence: confidence,
            irony: irony
        })
    } catch(error) {
        console.log(error)
    }
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})