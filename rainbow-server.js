//var url = require('url');
var fs = require('fs');
var http = require('http'); // Import Node.js core module
var events = require('events');
var eventEmitter = new events.EventEmitter();

var server = http.createServer(function (req, res) {   //create web server
    console.log('Request received: ' + req.url);
    if(req.url === ' '||req.url === '/index'||req.url === '/home'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/Index.html').pipe(res);
    }
    else if(req.url === '/patient' || req.url === '/patients'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/rainbow-patient/web/patient.html').pipe(res);
    }
    else if(req.url === '/Personal'|| req.url === '/personnel'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/Personal.html').pipe(res);
    }
    else{
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});


//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
};

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..');