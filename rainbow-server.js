var url = require('url');
var fs = require('fs');
var http = require('http'); // Import Node.js core module
var events = require('events');
var eventEmitter = new events.EventEmitter();

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request

// set response header
        res.writeHead(200, {'Content-Type': 'text/html'});

// set response content
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();

    } else if (req.url == "/patient.html") {

        res.writeHead(200, {'Content-Type': 'text/html'});
        var q = url.parse(req.url, true);
        var filename = "./rainbow-patient/web" + q.pathname;
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if (req.url == "/student.html") {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();

    } else
        res.end('Invalid Request!');

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