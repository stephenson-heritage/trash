const express = require('express');


let addBob = (req, res, next) => {

    //console.log(req);

    req.bob = "bob";
    next();

};


module.exports = addBob;