var fs = require('fs');
var http = require('http');
var https = require('https');
const sleep = (milliseconds) => {return new Promise(resolve => setTimeout(resolve, milliseconds));};
const fetch = require('node-fetch');

var config  = JSON.parse(fs.readFileSync('conf.json', 'utf8'));

var privateKey, certificate, credentials

if(config['Https'] == true) {
    privateKey  = fs.readFileSync(config['Https-privateKey'], 'utf8');
    certificate = fs.readFileSync(config['Https-certificate'], 'utf8');
    credentials = {key: privateKey, cert: certificate};
}

var express = require('express');
var app = express();

app.use(express.json());
app.set('trust proxy', true);

app.get("/", (req, res) => {
    var ip;
    if((req.headers).hasOwnProperty('x-forwarded-for'))
        ip = req.headers['x-forwarded-for'];
    else 
        ip = req.connection.remoteAddress;
    console.log(ip)
    if(config['Discord-webhook'] !== null)
        fetch(config['Discord-webhook'], {
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({'content': ip}),
            method: 'POST'
        })
    res.sendFile(__dirname+"/"+config['html']);
})

app.get("/:id", (req, res) => {
    let id = req.params.id
    var ip;
    if((req.headers).hasOwnProperty('x-forwarded-for'))
        ip = req.headers['x-forwarded-for'];
    else 
        ip = req.connection.remoteAddress;
    console.log(ip)
    if(config['Discord-webhook'] !== null)
        fetch(config['Discord-webhook'], {
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({'content': `${ip} from ${id}`}),
            method: 'POST'
        })
    res.sendFile(__dirname+"/"+config['html']);
})

if(config['Https'] == true) {
    var httpsServer = https.createServer(credentials, app);
    httpsServer.listen(443);
}

var httpServer = http.createServer(app);
httpServer.listen(80);