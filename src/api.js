const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'hello': 'how are you?'
    });

});

router.get('/reply', (req, res) => {
    res.json({
        'hello': 'Im doing fine!'
    });

});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);