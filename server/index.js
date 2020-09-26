const express = require('express');
const expServer = new express();
const PORT = 1985;

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from '../src/Home';

const homePage = ReactDOMServer.renderToString(<Home />);

expServer.get('*', function(req, res) {
    res.send(homePage);
});

expServer.listen(PORT, function(){
    console.log('server running at 1985');
})