/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

router.get('/', async = (req, res) => {
    try {
        console.log('Test backend!');
        res.send({model: 'tomato'});
    } catch (e) {
        console.log(e);
        return res.send('error');
    }
});

module.exports = router;
