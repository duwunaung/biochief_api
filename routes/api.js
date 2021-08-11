const express = require('express');

const router = express.Router();

router.post('/user/create', function(req, res, next) {
    res.send({
        status: 200
    })
})

module.exports = router;