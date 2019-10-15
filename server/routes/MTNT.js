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

router.get('/directions/:id', (req, res) => {
    console.log('HERES THE PAYLOAD', req.params.id)
    axios({
        method: 'GET',
        url: 'http://svc.metrotransit.org/NexTrip/Directions/'+req.params.id,
    }).then(response => {
        console.log(response);
        res.send(response.data)
    }).catch(error => {
        console.log('error making request', error);
        res.sendStatus(500)
    })
})

router.get('/stops/:route/:direction', (req, res) => {
    console.log('HERES THE PAYLOAD', req.params.route)
    axios({
        method: 'GET',
        url: 'http://svc.metrotransit.org/NexTrip/Stops/'+req.params.route+'/'+req.params.direction,
    }).then(response => {
        console.log(response);
        res.send(response.data)
    }).catch(error => {
        console.log('error making request', error);
        res.sendStatus(500)
    })
})

module.exports = router;