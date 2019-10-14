const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/routes', (req, res) => {
    axios({
        method: 'GET',
        url: 'http://svc.metrotransit.org/NexTrip/Routes',
    }).then(response => {
        console.log(response);
        res.send(response.data)
    }).catch(error => {
        console.log('error making request', error);
        res.sendStatus(500)
    })
})

router.get('/direction/', (req, res) => {
    axios({
        method: 'GET',
        url: 'http://svc.metrotransit.org/NexTrip/Directions/${ROUTE}',
    }).then(response => {
        console.log(response);
        res.send(response.data)
    }).catch(error => {
        console.log('error making request', error);
        res.sendStatus(500)
    })
})

module.exports = router;