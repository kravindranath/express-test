var express = require('express');
var expServer = new express();


import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from '../src/Home';

const homePage = ReactDOMServer.renderToString(<Home />);

expServer.get('*', function(req, res) {
    res.send(homePage);
});

expServer.listen(8000, function(){
    console.log('server running at 1985');
})