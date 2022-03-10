const express = require('express');
const router = express.Router();

/* GET home page. */


router.get('/count/:from-:to', (req, res) => {

    let from = parseInt(req.params.from);
    let to = parseInt(req.params.to);



    if (!isNaN(from) && !isNaN(to)) {
        console.log(from, to);
        if (to < from) {
            let tmp = to;
            to = from;
            from = tmp;
        }

        let out = req.bob + ' <ul>';


        for (let i = from; i <= to; i++) {
            out += `<li>${i}</li>`;
        }
        out += '</ul>'
        res.send(out);
    } else {
        res.send(req.bob + ' bad parameters');
    }

});


router.all('/', (req, res) => {

    //console.log(req.body, req.cookies);

    let ret = { "body": req.body, "cookies": req.cookies }
    res.send(ret);
});

router.get('/users/:userId/books/:bookId', function(req, res) {
    res.send(req.params.bookId + "<br>" + req.params.userId);
});

router.get('/users/:userId/books/', function(req, res) {
    res.send("no book id");
});
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Web4R', colour: "red" });
});

router.get('/:colour', function(req, res, next) {

    if (req.params.colour === 'user') {
        next();
    } else {
        res.render('index', { title: 'Web4R', colour: req.params.colour });
    }
});

router.get('/user', function(req, res, next) {
    res.send('user!');
});


module.exports = router;