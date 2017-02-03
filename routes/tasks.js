var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://karlo:karlo@ds139969.mlab.com:39969/mean-test-karlogonzales',['tasks']);

router.get('/tasks', function (req, res, next) {
    db.tasks.find(function (err, tasks) {
        if(err){
            res.send(err);
        }
        res.json(tasks);
    })
});

module.exports = router;