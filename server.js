var fs = require('fs');
var http = require('http');

var express = require('express');
var bodyParser = require('body-parser');

var cities = require('./Feature/cities');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/cities', function(request, response){
    response.send(cities.getAll());
});

app.get('/api/cities/:name', function(request, response){
    response.send(cities.getOne(request.params.name));
});

app.post('/api/cities', function(request, response){
    var city = request.body;

    if(cities.add(city) === 0){
        response.send(cities.getAll());
    }
    else{
        response.status(500).send({error: "City already exists"});
    }
});

app.put('/api/cities/:name', function(request, response){
    var city = request.body;
    if(cities.modify(city) === 0){
        response.send(cities.getAll());
    }
    else {
        response.status(500).send({error: 'City not found'});
    }
});

app.get('/api/rivers', function(request, response){
    response.send(require('./rivers').rivers);
});

app.listen(3000);